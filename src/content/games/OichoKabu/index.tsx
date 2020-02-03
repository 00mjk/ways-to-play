import * as React from 'react';
import Table from 'react-bootstrap/Table';

import { ArticleContentProps, Noun, Cards, Footnote } from 'ui';

import { CardGamesAroundTheWorld, NoteOnAMissingLink, CardGamesAmongAborigines } from 'References/bibliography.json';

const OichoKabu: React.FC<ArticleContentProps> = ({cite, pronounce}) => {
    return (<>
  <p><Noun lang="ja-Latn">Oicho-Kabu</Noun> (<span lang="ja">おいちょかぶ</span>, ‘eight-nine’) is a Japanese gambling game in the style of Baccarat.</p>
  <Footnote>
    There are also <span lang="ja-Latn">hanafuda</span> decks with only 10 months, called <span lang="ja-Latn">mushifuda</span>.
  </Footnote>
  <p>It is played with special cards called <span lang="ja-Latn">kabufuda</span> (<span lang="ja">株札</span>, ‘<span lang="ja-Latn">kabu</span> cards’). It can also be played with <span lang="ja-Latn">hanafuda</span> cards (by dropping two months), or with the <Cards>A–9</Cards> from a standard deck of playing cards.</p>
  <Footnote>
    A <Noun lang="ja-Latn">Nintendō</Noun> advertising poster from the early 20th century also indicates that their cards were being exported to Australia.
  </Footnote>
  <p>The game originated in Japan, but has surprisingly also been spotted in the northern parts of Australia amongst Aboriginal communities; apparently having been transferred there by Japanese sailors working in the pearl industry.{cite(NoteOnAMissingLink)}{cite(CardGamesAmongAborigines)}</p>
  <section id="play">
    <h2>Play</h2>
    <p>Up to ten people can play the game (aside from the dealer).</p>
  </section>
  <section id="terminology">
    <h3>Terminology</h3>
    <p>The hand totals are counted with special gambling-specific numbers. Some of these — like the playing cards themselves — are derived from Portuguese:</p>
    <Table>
      <thead>
        <tr>
          <th>Total</th>
          <th>Standard</th>
          <th>Gambling</th>
          <th>Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0 <span lang="ja">〇</span></td>
          <td><span lang="ja-Latn">rei</span></td>
          <td><span lang="ja-Latn">buta</span></td>
          <td>‘pig’</td>
        </tr>
        <tr>
          <td>1 <span lang="ja">一</span></td>
          <td><span lang="ja-Latn">ichi</span></td>
          <td><span lang="ja-Latn">pin</span></td>
          <td>From Portuguese <span lang="pt">pinta</span>, ‘spot’</td>
        </tr>
        <tr>
          <td>2 <span lang="ja">二</span></td>
          <td><span lang="ja-Latn">ni</span></td>
          <td><span lang="ja-Latn">nizou</span></td>
          <td/>
        </tr>
        <tr>
          <td>3 <span lang="ja">三</span></td>
          <td><span lang="ja-Latn">san</span></td>
          <td><span lang="ja-Latn">santa/sanzun</span></td>
          <td/>
        </tr>
        <tr>
          <td>4 <span lang="ja">四</span></td>
          <td><span lang="ja-Latn">shi/yon</span></td>
          <td><span lang="ja-Latn">yotsuya</span></td>
          <td>‘set of four arrows’</td>
        </tr>
        <tr>
          <td>5 <span lang="ja">五</span></td>
          <td><span lang="ja-Latn">go</span></td>
          <td><span lang="ja-Latn">goke/gosu</span></td>
          <td/>
        </tr>
        <tr>
          <td>6 <span lang="ja">六</span></td>
          <td><span lang="ja-Latn">roku</span></td>
          <td><span lang="ja-Latn">roppou</span></td>
          <td/>
        </tr>
        <tr>
          <td>7 <span lang="ja">七</span></td>
          <td><span lang="ja-Latn">nana/shichi</span></td>
          <td><span lang="ja-Latn">naki/shichiken</span></td>
          <td/>
        </tr>
        <tr>
          <td>8 <span lang="ja">八</span></td>
          <td><span lang="ja-Latn">hachi</span></td>
          <td><span lang="ja-Latn">oicho</span></td>
          <td>From Portuguese <span lang="pt">oito</span>, ‘eight’</td>
        </tr>
        <tr>
          <td>9 <span lang="ja">九</span></td>
          <td><span lang="ja-Latn">kyū</span></td>
          <td><span lang="ja-Latn">kabu</span></td>
          <td>Possibly from an Edo-period word for nine, <span lang="ja-Latn">kau</span></td>
        </tr>
      </tbody>
      <tfoot />
    </Table>
  </section>
  <section id="variants">
    <h2>Variants</h2>
    <section id="kabu">
      <h3>Kabu</h3>
      <p>This is a simplified variant by Sid Sackson, for 2–6 players.{cite(CardGamesAroundTheWorld, [12])}</p>
      <p>Play with the <Cards>A–10</Cards> from a standard deck of cards. You will also need some chips to keep track of score. Sids’ suggested chip distribution for each player is:</p>
      <Table>
        <thead>
          <tr>
            <th>Players</th>
            <th>1 pt<br/>(White)</th>
            <th>5 pt<br/>(Red)</th>
            <th>10 pt<br/>(Blue)</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2</td>
            <td>10</td>
            <td>2</td>
            <td>2</td>
            <td>40</td>
          </tr>
          <tr>
            <td>3</td>
            <td>10</td>
            <td>3</td>
            <td>3</td>
            <td>55</td>
          </tr>
          <tr>
            <td>4</td>
            <td>10</td>
            <td>4</td>
            <td>4</td>
            <td>70</td>
          </tr>
          <tr>
            <td>5</td>
            <td>10</td>
            <td>5</td>
            <td>5</td>
            <td>85</td>
          </tr>
          <tr>
            <td>6</td>
            <td>10</td>
            <td>6</td>
            <td>6</td>
            <td>100</td>
          </tr>
        </tbody>
      </Table>
      <p>Shuffle and deal two cards face-down to each player. Each player looks at their cards and may then request a third, and subsequently a fourth card.</p>
      <p>The goal, as in standard <Noun lang="ja-Latn">Oicho-Kabu</Noun>, is to get a total as close to 9 as possible, discarding 10s.</p>
      <p>After all players have finished requesting new cards, the hands are revealed. Each player collects the difference from their hand to players with a lower count, and pays the different from their hand to players with a higher count.</p>
      <p>The game ends when a player is unable to pay their debts as they have run out of chips. They do not pay any of their remaining chips. Whoever has the most points is the winner.</p>
      <p><strong>Variant</strong>: in addition to dealing to the players, deal 6 cards face-up to the table. These cards are out of play but give the players more information about the cards remaining in the deck.</p>
    </section>
  </section>
</>);
}

export default OichoKabu;