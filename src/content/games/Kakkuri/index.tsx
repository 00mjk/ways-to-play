import * as React from 'react';

import { ArticleContentProps, Noun, Cards } from 'ui';

import { KakkuriYomi } from 'References/bibliography.json';

import pronKakkuri from './pronunciation_ja_がっくり.mp3';
import pronHako from './pronunciation_ja_箱.mp3';

const Kakkuri: React.FC<ArticleContentProps> = ({cite, pronounce}) => {
    return (<>
  <p><Noun>{pronounce("strawberrybrown", "Kakkuri", "ja-Latn", pronKakkuri)}</Noun> (<span lang="ja">カックリ</span> ) is the last surviving <span lang="ja-Latn">yomi</span> (<span lang="ja">読み</span>, ‘reading’) card game in Japan.{cite(KakkuriYomi)} It is still played in the town of <Noun lang="ja-Latn">Yafune</Noun> (<span lang="ja">矢船町</span>), in the city of <Noun lang="ja-Latn">Echizen</Noun> (<span lang="ja">越前市</span>) in <Noun lang="ja-Latn">Fukui</Noun> prefecture (<span lang="ja">福井県</span>).</p>
  <section id="equipment">
    <h2>Equipment</h2>
    <p><Noun lang="ja-Latn">Kakkuri</Noun> is played with <span lang="ja-Latn">Komatsufuda</span> (<span lang="ja">小松札</span>), a deck of 48 cards which run from 1–12 in four suits. Alternatively, it can be played with <Noun lang="ja-Latn">Hanafuda</Noun> cards if you are very familiar with the deck ordering, or you can play with a standard deck of cards by removing all <Cards>10</Cards>s.</p>
  </section>
  <section id="setup">
    <h2>Setup</h2>
    <p>As in other Japanese games, all actions (dealing and playing) are performed in an anti-clockwise direction.</p>
    <p>The game is usually played for money: a stake should be decided between the players, and all payments are made in multiples of this stake (1×, 2×, 3×). Otherwise, these can be counted as points.</p>
    <p>Deal 6 cards to each player in groups of 3. The remaining cards are set in a stack face-down in the middle of the table; this is called the ‘box’ (<span lang="ja">箱</span> {pronounce("poyotan", "hako", "ja-Latn", pronHako)}).</p>
    <p>If there are 8 people playing, then there will be no cards leftover to form the box; instead, whoever received the <Cards>3</Cards> of <span lang="ja-Latn">pao</span> (or <Cards>3c</Cards>) drops out and their hand is shuffled to become the box.</p>
    <p>Before looking at their cards, each player in turn can exchange their hand with the dealer’s hand. This can happen multiple times so that players can end up with the hands of previous players if multiple players swapped.</p>
    <p>Next, the players look at their cards. If any player has been dealt the non-red <Cards>1</Cards>s of <span lang="ja-Latn">isu</span>, <span lang="ja-Latn">ouro</span>, and <span lang="ja-Latn">kotsu</span> (or <Cards>AsAdAh</Cards> if playing with standard playing cards), then they win instantly and are paid 3× by each other player.</p>
  </section>
  <section id="play">
    <h2>Play</h2>
    <p>To start play, the dealer turns up the top card of the box, which will count as the first card played. The dealer then takes the first turn.</p>
    <p>On a player’s turn they must play a card one rank higher than the last card played (e.g. if the last card is a <Cards>3</Cards>, you can only play a <Cards>4</Cards>). Suits do not matter, and cards are played on the table in front of the person playing them, rather than in the middle of the table.</p>
    <p>Alternatively, they can pass. Passing is ‘soft’ and doesn’t prevent you from playing again later in the round.</p>
    <p>As long as they haven’t played any cards yet, a player can drop out on their turn by paying 1× to the pot.</p>
    <p>The <Cards>1</Cards> of <span lang="ja-Latn">pao</span> (<Cards>Ac</Cards>) and <Cards>2</Cards> of <span lang="ja-Latn">ouro</span> (<Cards>2d</Cards>) are wild and can be played as any other card. If turned up from the box they count as a normal <Cards>1</Cards> &amp; <Cards>2</Cards>.</p>
    <p>A player can keep playing cards until they run out of valid moves, so if they have several cards in sequence they can play them all.</p>
    <p>It is not permitted to play more than one card of the same rank, except:</p>
    <ul>
      <li>You can play as many <Cards>1</Cards>s or <Cards>2</Cards>s as you like. You can also play a <Cards>1</Cards> on a <Cards>1</Cards> or a <Cards>2</Cards> on a <Cards>2</Cards>.</li>
      <li>If you have 3 cards of the same rank you can play all of them together. You cannot play 2 or 4 of the same rank, but you can play 3 if you have 4.</li>
      <li>If you hand consists of 3 pairs, then any time before you play your first card you can declare ‘three pairs’ (<span lang="ja">三足</span> <span lang="ja-Latn">sansoku</span>). After that you can (and must) play your cards in pairs.</li>
    </ul>
    <p>When the last card played is a <Cards>12</Cards> <span lang="ja-Latn">kiri </span>(or <Cards>K</Cards>), then any rank can be played next.</p>
    <p>After all players pass in a row, the last player can either take another turn, or turn up a new card from the box before taking another turn.</p>
    <p>The first player to get rid of all their cards wins and all other players (who did not drop out) must pay 1× to the pot, which the winner takes. If a player wins on their first turn then everyone must pay 2× instead.</p>
    <p>The winner deals for the next game.</p>
  </section>
</>);
}

export default Kakkuri;