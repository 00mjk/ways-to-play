import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import references from '../References/bibliography.json';
import { renderReference, Reference } from '../References';

import Row from 'react-bootstrap/Row';

const Bibliography: React.FC = () => {

    const sortKey = (r: Reference): string =>
        `${r.author ? (r.author[0].family || '') : (r.publisher || '')}
        ${r.author ? (r.author[0].given === 'string' ? r.author[0].given : r.author[0].given[0]) : ''}
        ${r.issued ? r.issued.year : ''}
        ${r.title}`;

    return (<>
        <Helmet>
            <title>Bibliography</title>
        </Helmet>
        <section>
            <h1>Bibliography</h1>
            <Row>
                <ul className="reference-list list-unstyled col-8 offset-2">
                    {Object.entries(references)
                        .concat()
                        .sort(([_1, r1], [_2, r2]) => sortKey(r1) < sortKey(r2) ? -1 : 1)
                        .map(([id, r]) => <li key={id}>{renderReference(r)}</li>)}
                </ul>
            </Row>
        </section>
    </>);
}

export default Bibliography;