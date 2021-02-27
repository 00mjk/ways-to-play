import * as React from 'react';
import { RouteComponentProps, Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Article, ArticleContent } from 'ui';

type List = { title: string, titleLang?: string, article?: ArticleContent, articles: ListEntries }
type ListEntries = Map<string, ArticleContent | List>

const articles: List = {
  title: "🧾",
  article: {
    title: 'Articles',
    import: React.lazy(() => import(/* webpackChunkName: 'articles-intro' */ './articles-intro')),
  },
  articles: new Map([
    ['mill-games', {
      title: "Mill Games",
      import: React.lazy(() => import(/* webpackChunkName: 'mill-games' */ './mill-games'))
    }],
    ['cards', {
      title: "Playing Cards",
      articles: new Map([
        ['japan', {
          title: "Japanese Cards",
          article: {
            title: 'Japanese Cards',
            draft: true,
            import: React.lazy(() => import(/* webpackChunkName: 'japanese-cards' */ './cards/japan/introduction'))
          },
          articles: new Map([
            ['kabu-karuta', {
              title: 'Kabu Karuta',
              titleLang: 'ja-Latn',
              draft: true,
              import: React.lazy(() => import(/* webpackChunkName: 'kabufuda' */ './cards/japan/kabu-karuta/kabu-karuta')),
            }],
            ['hanafuda', {
              title: 'Hanafuda',
              titleLang: 'ja-Latn',
              article: {
                title: "Introduction to Hanafuda",
                import: React.lazy(() => import(/* webpackChunkName: 'hanafuda-intro' */ './cards/japan/hanafuda/basics'))
              },
              articles: new Map([
                ['art', {
                  title: "The History & Art of Hanafuda",
                  draft: true,
                  import: React.lazy(() => import(/* webpackChunkName: 'hanafuda-art' */ './cards/japan/hanafuda/art'))
                }],
                ['traditional-manufacturers', {
                  title: "Traditional Hanafuda Brands",
                  import: React.lazy(() => import(/* webpackChunkName: 'hanafuda-traditional-brands' */ './cards/japan/hanafuda/manufacturers/traditional'))
                }],
                ['new-manufacturers', {
                  title: "New Hanafuda Brands",
                  import: React.lazy(() => import(/* webpackChunkName: 'hanafuda-new-brands' */ './cards/japan/hanafuda/manufacturers/new'))
                }]
              ])
            }],
          ])
        }],
        ['new-zealand', {
          title: "Playing Cards in New Zealand",
          draft: true,
          import: React.lazy(() => import(/* webpackChunkName: 'playing-cards-nz' */ './cards/nz/new-zealand'))
        }]
      ])
    }]
  ])
};

const renderArticleList = (list: ListEntries, pathSoFar: string) => {
  while (pathSoFar.endsWith('/')) {
    pathSoFar = pathSoFar.substr(0, pathSoFar.length - 1);
  }

  return (
    <ul className="article-list">
      {[...list.entries()].map(([path, obj]) => (
        (process.env.NODE_ENV === 'production' && ('draft' in obj && obj.draft))
          ? null
          : <li key={path}>
            {
              'articles' in obj
                ? (<>
                  <Link to={`${pathSoFar}/${path}/`} lang={obj.titleLang}>{obj.title}</Link>
                  {renderArticleList(obj.articles, `${pathSoFar}/${path}`)}
                </>)
                : <Link to={`${pathSoFar}/${path}/`} lang={obj.titleLang}>
                  {obj.title}
                  {' '}
                  {obj.draft && <Badge variant="warning">Draft</Badge>}
                </Link>
            }
          </li>
      ))}
    </ul>
  );
};

const ArticleList: React.FC<{ list: List, route: RouteComponentProps }> = ({ list, route }) => {
  const { match } = route;
  return (<>
    {renderArticleList(list.articles, match.url)}
  </>);
}

type ArticleLink = { link: string, title: string, titleLang?: string };

const Lookup: React.FC<RouteComponentProps<{ id?: string }>> = (props) => {

  const { match } = props;
  const idParts = (match.params.id || '').split('/').filter(x => x !== '');

  let found: ArticleContent | List | null = articles;
  let nextArticle: ArticleLink | undefined = undefined;
  let prevArticle: ArticleLink | undefined = undefined;

  let at: ListEntries | null = articles.articles;

  const crumbs: { title: string, link: string, titleLang?: string }[] = []
  let crumbLink = '/articles/';
  crumbs.push({ title: articles.title, link: crumbLink });

  for (let ix = 0; ix < idParts.length; ++ix) {
    if (at === null) {
      found = null;
      break;
    }

    const part = idParts[ix];
    const next: List | ArticleContent | undefined = at.get(part);
    if (next) {
      crumbLink += part + '/';
      crumbs.push({ title: next.title, titleLang: next.titleLang, link: crumbLink });
      found = next;

      nextArticle = undefined;
      prevArticle = undefined;

      let atFound = false;
      for (const key of at.keys()) {
        if (key === part) {
          atFound = true;
          continue;
        }

        const article = at.get(key)!;
        if (!atFound) {
          if (process.env.NODE_ENV !== 'production' || !('draft' in article) || !article.draft) {
            prevArticle = { link: `../${key}/`, title: article.title, titleLang: article.titleLang };
          }
        } else {
          if (process.env.NODE_ENV !== 'production' || !('draft' in article) || !article.draft) {
            nextArticle = { link: `../${key}/`, title: article.title, titleLang: article.titleLang };
            break;
          }
        }
      }

      if ('articles' in next) {
        at = next.articles;
      } else {
        at = null;
      }
    } else {
      found = null;
      break;
    }
  }

  if (!found) {
    return null;
  }

  const breadCrumbs =
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb m-1 p-1" itemProp="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
        {crumbs.map(({ title, link, titleLang }, ix) =>
          (ix === crumbs.length - 1)
            ? <li className="breadcrumb-item active" key={ix} aria-current="page" lang={titleLang} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <meta itemProp="position" content={`${ix+1}`} />
              <span itemProp="name">{title}</span>
            </li>
            : <li className="breadcrumb-item" key={ix} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <meta itemProp="position" content={`${ix+1}`} />
              <Link to={link} lang={titleLang} itemProp="item" itemScope itemType="https://schema.org/WebPage" itemID={link}><span itemProp="name">{title}</span></Link>
            </li>)}
      </ol>
    </nav>;

  const prevNext = (<>
    <Col xs={12} md={6}>
      {prevArticle &&
        <p className="text-left m-2">← <a href={prevArticle.link} lang={prevArticle.titleLang} rel="prev">{prevArticle.title}</a></p>}
    </Col>
    <Col xs={12} md={6}>
      {nextArticle &&
        <p className="text-right m-2"><a href={nextArticle.link} lang={nextArticle.titleLang} rel="next">{nextArticle.title}</a> →</p>}
    </Col>
  </>);

  if ('import' in found) {
    return (<>
      <Nearby>
        <Col>
          <Row className="border-bottom border-light">{breadCrumbs}</Row>
          {(prevArticle || nextArticle) && <Row>{prevNext}</Row>}
        </Col>
      </Nearby>
      <Article key={match.url} url={match.url} content={found} />
      <div aria-hidden="true">
        {/* hidden as this is already present at the top */}
        <Nearby>
          {(prevArticle || nextArticle) && prevNext}
        </Nearby>
      </div>
    </>);
  }
  else {
    const listArticle = found.article;
    return (<>
      <Nearby>
        <Col>
          <Row className="border-bottom border-light">{breadCrumbs}</Row>
          {(prevArticle || nextArticle) && <Row>{prevNext}</Row>}
        </Col>
      </Nearby>
      {listArticle && <Article key={match.url + "$"} url={match.url} content={listArticle} />}
      <div aria-hidden="true">
        {/* hidden as this is already present at the top */}
        <Nearby>
          <ArticleList key={match.url} route={props} list={found} />
        </Nearby>
      </div>
    </>);
  }
}

const Nearby: React.FC = ({ children }) => (
  <Row className="border-bottom border-top border-light m-4" as="nav" aria-label="Nearby Articles">
    {children}
  </Row>
);

export const Articles: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <Switch>
      <Route path={match.path} exact component={Lookup} />
      <Route path={`${match.path}/:id+/`} component={Lookup} />
    </Switch>
  );
};
