import * as React from 'react';

import { ArticleImage, Noun, Section, Cards } from 'ui';

import imgNaPua5Brights from './NaPua_5Brights.jpg';
import imgNaPuaNovember from './NaPua_November.jpg';
import imgHawaii5Brights from './Hawaii_5Brights.jpg';
import imgHawaii5November from './Hawaii_November.jpg';
import imgNyangTu from './Nyangtu.jpg';
import imgMeongTu from './Meongtu.jpg';
import imgNishikiHana from './NishikiHana.jpg';
import imgNishikiFuda from './NishikiFuda.jpg';
import imgPebbleHwatu from './PebbleHwatu.jpg';
import imgYongJaengStyle from './YongJaengStyle.jpg';
import imgHanami from './Hanami.jpg';
import imgCochaeBrights from './Cochae_Brights.jpg';
import imgJuniorBrights from './Junior_Brights.jpg';
import imgJuniorBamboo from './Junior_Bamboo.jpg';
import imgPixelHanafuda from './pixel_hanafuda.jpg';
import imgPixelHanafudaSwapped from './pixel_hanafuda_swapped.jpg';
import imgIWnightparade from './IW_night_parade.jpg';
import imgIWtetraptych from './IW_tetraptych.jpg';
import imgJRbrights from './JR_brights.jpg';
import imgJRtetraptych from './JR_tetraptych.jpg';
import imgHerokuBrights from './Heroku_Brights.jpg';
import imgTuhwaBrights from './Tuhwa_Brights.jpg';
import imgModernHanafuda from './Modern_Hanafuda.jpg';

const Manufacturers: React.FC = () => {
  return (<>
    <p>In the internet era there are now many <Noun lang="ja-Latn">Hanafuda</Noun> brands that are produced on a small scale. Most of the production is outsourced to larger firms, and the designs aren’t made by the themselves. Thanks to the rise of crowdfunding, the variety of designs has greatly expanded from the traditional patterns.</p>
    <Section title={<a href="https://blankproject.kr/">Blank’s Art Project</a>}>
      <p>Blank’s Art Project have created several Hwatu decks with custom art: <strong>Pebble</strong> (2016), Golden Toad (2018 & 2019 editions, crowdfunded on Korean site ‘wadiz’), and Pebble Film Edition (2019). They have also created custom promotional decks for Jeju beer (2017).</p>
      <ArticleImage
        src={imgPebbleHwatu}
        alt="TODO">
        The five Bright cards of the Pebble <Noun lang="ko-Latn">Hwatu</Noun> deck (2016).
          </ArticleImage>
    </Section>
    <Section title={<a href="http://www.hanafudahawaii.com/">Hanafuda Hawaii</a>}>
      <p>Produces two different decks: Hanafuda Hawai‘i Style (2009), and Hanafuda Nā Pua Hawai‘i (2016).</p>
      <p><b>Hanafuda Hawai‘i Style</b> recreates the traditional Japanese deck with bold artwork, including scores printed on the cards and with helpful icons to identify scoring combinations on the cards. In the rules given with the deck, there are not “5 Brights”, so the “4 Brights” are reproduced here:</p>
      <ArticleImage
        src={imgHawaii5Brights}
        alt="TODO">
        Hanafuda Hawai‘i Style bright cards.
          </ArticleImage>
      <p>The cards of November show more of the style of the cards (note the ‘rain man’ is worth a mere 5 points with the Hawaiian rules):</p>
      <ArticleImage
        src={imgHawaii5November}
        alt="TODO">
        Hanafuda Hawai‘i Style November cards.
          </ArticleImage>
      <p><b>Hanafuda Nā Pua Hawai‘i</b> is probably my favourite of all the modern <Noun lang="ja-Latn">Hanafuda</Noun> decks. It recontextualizes the game with the flora and fauna native to Hawai‘i, matching visual puns to the bold art of the Hawai‘i Style deck: in the month of March, for example, the cherry blossoms become <span lang="haw">‘iliahi</span> (sandalwood) flowers, and the curtain becomes the traditional <span lang="haw">kapa</span> cloth.</p>
      <ArticleImage
        src={imgNaPua5Brights}
        alt="TODO">
        Hanafuda Nā Pua Hawai‘i bright cards.
          </ArticleImage>
      <ArticleImage
        src={imgNaPuaNovember}
        alt="TODO">
        Hanafuda Nā Pua Hawai‘i November cards.
          </ArticleImage>
    </Section>
    <Section title={<a href="http://www.indianwolfstudios.com/">Indianwolf Studios</a>}>
      <p>Indianwolf have so far produced the <a href="http://www.indianwolfstudios.com/hanami.html"><Noun lang="ja-Latn"><strong>Hanami Hanafuda</strong></Noun></a> (2018) and <a href="http://www.indianwolfstudios.com/sensu.html"><Noun lang="ja-Latn">Sensu Hanafuda</Noun></a> (2019) decks, in poker-sized cards printed by Legends Playing Card Company. Both of these are available in a plain version, or one that has indices to aid new players.</p>
      <ArticleImage
        src={imgHanami}
        alt="Five hanafuda cards drawn in a minimalistic but realistic style.">
        The five Bright cards of the <Noun lang="ja-Latn">Hanami Hanafuda</Noun> deck.
          </ArticleImage>
      <p>After another successful Kickstarter campaign, Indianwolf also produced the <a href="http://www.indianwolfstudios.com/night-parade-fusion.html"><strong>Night Parade</strong></a> deck (2020). The four cards of each month combine to form one wide tetraptych. The deck is themed upon traditional Japanese monsters (<span lang="ja-Latn">yōkai</span>), and it also comes with rules for a new game called “<a href="https://en.wikipedia.org/wiki/Yamata_no_Orochi">Orochi</a>”.</p>
      <ArticleImage
        src={imgIWnightparade}
        alt="">
        The five Bright cards of the Night Parade deck, and one joker.
      </ArticleImage>
      <ArticleImage
        src={imgIWtetraptych}
        alt="">
        The tetraptych formed by the four <Cards>K</Cards>s, all of which can be used as jokers.
      </ArticleImage>
    </Section>
    <Section title={<><a href="https://www.instagram.com/jamaistore/"><span lang="ko">자매상점</span> (jamaistore)</a></>}>
      <p>Jamaistore produces ridiculously-cute cat &amp; dog themed <span lang="ko-Latn">hwatu</span> decks. Each of them comes with an additional six joker cards, appropriate to the theme. Both decks were crowdfunded on the Korean site ‘tumblbug’.</p>
      <ArticleImage
        src={imgNyangTu}
        alt="The 5 brights of the Nyangtu deck, featuring cats interposed into the traditional cards.">
        Jamaistore’s <span lang="ko">냥투</span> (<span lang="ko-Latn">nyangtu</span>, ‘meow fight’) deck (2016).<br />
            The name is a pun on <span lang="ko-Latn">hwatu</span> with the Korean <span lang="ko-Latn">nyang</span> meaning ‘meow’.
          </ArticleImage>
      <ArticleImage
        src={imgMeongTu}
        alt="The 5 brights of the Nyangtu deck, featuring cats interposed into the traditional cards.">
        Jamaistore’s <span lang="ko">멍투</span> (<span lang="ko-Latn">meongtu</span>, ‘woof fight’) deck (2017).
          </ArticleImage>
    </Section>
    <Section title={<a href="http://www.modernhanafuda.net/">Modern Hanafuda</a>}>
      <p><strong>Modern Hanafuda</strong> (2012) was one of the earliest Kickstarted <Noun lang="ja-Latn">Hanafuda</Noun> decks. It was designed by Sarah Thomas, and the cards are decorated with bold flat colours and geometric patterns. The cards are larger and longer than normal playing cards.</p>
      <ArticleImage
        src={imgModernHanafuda}
        alt="Five playing cards, the first with a crane with its neck arched back and pine trees patterened with criss-crossing stripes, the second with cherry blossoms behind a curtain bearing a cherry blossom pattern, the third of a white moon in a red sky over circular hills in orange and yellow, the fourth with a man holding an umbrella and standing under a willow tree watching a frog, and the fifth with a Japanese phoenix beating its wings over realistically-shaped Paulownia flowers.">
        The 5 Bright cards of the Modern Hanafuda deck.
        </ArticleImage>
    </Section>
    <Section title={<a href="https://www.etsy.com/shop/nishikie" lang="ja-Latn" className="proper-noun">NISHIKI <span lang="ja">錦</span></a>}>
      <p>This redesign by <Noun lang="ja-Latn">Hanako</Noun> of <a href="http://www.estudio-artes.com/">estudio artes</a> produced the only 3-way standard/<Noun lang="ja-Latn">Hanafuda</Noun>/<Noun lang="ja-Latn">Kabufuda</Noun> deck that I know of, which is printed on poker-sized cards. There is also a <Noun lang="ja-Latn">Hanafuda</Noun>-only deck, in a traditional format.</p>
      {/*<p>by Hanako: https://profile.ameba.jp/ameba/estudio-artes</p>*/}
      <ArticleImage
        src={imgNishikiFuda}
        alt="TODO">
        The 5 Bright cards of the combination <Noun lang="ja-Latn">Nishiki Fuda</Noun> deck. The cards from A–10 have Japanese numerals for use as  <Noun lang="ja-Latn">Kabufuda</Noun> cards.
          </ArticleImage>
      <ArticleImage
        src={imgNishikiHana}
        alt="TODO">
        The 5 Bright cards of the standard <Noun lang="ja-Latn">Nishiki Fuda</Noun> deck.
          </ArticleImage>
    </Section>
    <Section title={<a href="http://www.hatoo.net/"><span lang="ko">용쟁화투</span> <Noun lang="ko-Latn">Yongjaeng Hwatoo</Noun></a>}>
      <p><Noun lang="ko-Latn">Yongjaeng Hwatoo</Noun> produce <span lang="ko-Latn">hwatu</span> decks in three varieties: Classic, Cute, and <strong>Style</strong> (pictured below). These designs have been produced in several editions over the years.</p>
      <ArticleImage
        src={imgYongJaengStyle}
        alt="TODO">
        The five Bright cards of the <Noun lang="ko-Latn">Yongjaeng Hwatoo</Noun> Style deck (2017).
          </ArticleImage>
    </Section>
    <Section title="Cochae">
      <p>Japanese paper design house Cochae produces <a href="http://www.cochae.com/system/goods/2359/"><strong lang="ja-Latn">Kokoyo</strong></a> (2019), a deck with bold, crisp visuals and faces on everything. The cards are coded by background colour so that Bright cards have a gold background, Tane have silver, etc.</p>
      <ArticleImage
        src={imgCochaeBrights}
        alt="TODO">
        The 5 Bright cards of the Cochae <Noun lang="ja-Latn">Kokoyo</Noun> deck (2019). The backgrounds are a metallic gold colour, which doesn’t show up well here.
          </ArticleImage>
    </Section>
    <Section title={<a href="https://www.junior.cards/">Junior</a>}>
      <p>Junior have produced a ground-up redesign of Hanafuda into a poker format deck, printed by <abbr title="the United States Playing Card Company">USPCC</abbr>. The first edition is called the <strong>Phoenix</strong> deck (2019). Each different type of <Noun lang="ja-Latn">Hanafuda</Noun> card has a different background, and all are identified by suit marker indices, which helps to clarify the cards for new players.</p>
      <ArticleImage
        src={imgJuniorBrights}
        alt="TODO">
        The 5 Bright cards of the Junior Phoenix <Noun lang="ja-Latn">Hanafuda</Noun> deck.
      </ArticleImage>
      <p>To fill out the full 54 cards of a standard poker deck, there are an additional 6 ‘bamboo’ cards including an additional <Noun lang="ja-Latn">Fuji</Noun> Bright and second Oni card:</p>
      <ArticleImage
        src={imgJuniorBamboo}
        alt="TODO">
        The additional ‘Bamboo’ suit of the Phoenix deck.
      </ArticleImage>
      <p>After the successful completion of <a href="https://www.kickstarter.com/projects/juniorcards/junior-hanafuda">a Kickstarter campaign</a> in 2020, two more Junior decks are being produced: <strong>Dragon</strong> and <strong>Tiger</strong>.</p>
    </Section>
    <Section title="Pixel Hanafuda">
      <p>Ryan Sartor has produced <strong>Pixel Hanafuda</strong>, which is currently available from <a href="https://www.thegamecrafter.com/games/pixel-hanafuda">The Game Crafter</a>. The art is inspired by 8- &amp; 16-bit video games, and the cards are designed with a 29×44 pixel grid. The full set includes two decks, one each with black and red borders, and an additional 12 cards with “<a href="https://en.wikipedia.org/wiki/Palette_swap">palette-swapped</a>” colours, as an homage to the artistic techniques of the era. These additional cards can be used to play or invent new games; the set also includes rules for three original games invented by Ryan.</p>
      <ArticleImage
        src={imgPixelHanafuda}
        alt="">
        The five Brights of the Pixel <Noun lang="ja-Latn">Hanafuda</Noun> deck.
      </ArticleImage>
      <ArticleImage
        src={imgPixelHanafudaSwapped}
        alt="">
        Some of the palette-swapped cards from the Pixel <Noun lang="ja-Latn">Hanafuda</Noun> deck.
      </ArticleImage>
    </Section>
    <Section title={<Noun lang="ja-Latn">Tetsufuda</Noun>}>
      <p><strong><a href="https://www.kotsu.co.jp/en/tetsufuda/"><Noun lang="ja-Latn">Tetsufuda</Noun></a></strong> (<span lang="ja">鉄札</span>, 2020) is a train-themed deck created by <Noun lang="ja-Latn">Kotsu Shimbunsha</Noun>, the publishing arm of the Japan Railways group (JR).</p>
      <p>Each month features a real train that runs on a JR line, and the cards show attributes or specialities of the different regions of Japan. The four cards of each month combine to form a tetraptych.</p>
      <ArticleImage
        src={imgJRbrights}
        alt="">
        The five Brights of the <Noun lang="ja-Latn">Tetsufuda</Noun> deck.
      </ArticleImage>
      <ArticleImage
        src={imgJRtetraptych}
        alt="">
        The maple cards feature the <a href="https://en.wikipedia.org/wiki/Nozomi_(train)"><Noun lang="ja-Latn">Nozomi Shinkansen</Noun></a> of the <a href="https://en.wikipedia.org/wiki/Tokaido_Shinkansen"><Noun lang="ja-Latn">Tōkaidō</Noun> line</a>.
      </ArticleImage>
    </Section>
    <Section title="Heroku Hanafuda">
      <p><a href="https://www.heroku.com/hanafuda">Created by Heroku as a promotional item</a>, this deck was designed by <a href="https://lynnandtonic.com/">Lynn Fisher</a>. The cards feature icons and imagery related to Heroku’s products.</p>
      <ArticleImage
        src={imgHerokuBrights}
        alt="">
        The 5 Brights of Heroku’s deck.
      </ArticleImage>
    </Section>
    <Section title={<><a href="http://utmost.co.kr/portfolio/flower-war/">Tuhwa (<span lang="ko">투화</span>)</a></>}>
      <p>This deck was designed by Korean design firm Utmost, and was first <a href="https://www.wadiz.kr/web/campaign/detail/21803">crowdfunded on wadiz</a>. The name is a reversal of the standard Korean name <Noun lang="ko-Latn">Hwatu</Noun> (<span lang="ko">화투</span>). There are several editions of the deck available — <strong><a href="http://utmost.co.kr/portfolio/flower-war/">v2</a></strong> (2018) and <strong><a href="http://utmost.co.kr/portfolio/flowerwar2020/">v3</a></strong> (2020) (“v1” appears to have been a small or private printing) — and each features different art based on traditional Korean art styles. The cards are much larger than those in a standard deck, and are made of plastic like other Korean decks.</p>
      <ArticleImage
        src={imgTuhwaBrights}
        size="wide"
        alt="">
        The 5 Brights of the Tuhwa (v2) deck.
      </ArticleImage>
    </Section>
  </>);
};

export default Manufacturers;
