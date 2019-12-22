import * as React from 'react';

import { ArticleContentProps, ArticleImage, Noun } from 'ui';
import { Yamaguchi, IwanoMatsui, ModernJapaneseWrappers, SalterJapanese } from 'References/bibliography.json';

import imgMarks from '../manufacturer-marks.jpg';
import imgShogundo from './Shogundo.jpg';
import imgGenroku from './AngelGenroku.jpg';
import imgMarue from './Marue.jpg';
import imgAce from './AceGrandDuke.jpg';
import imgOishiTengudo from './OishiTengudo.jpg';
import imgNintendo from './Nintendo.jpg';
import imgNintendoEnd from './NintendoEnd.jpg';
import imgHanaTrump5Brights from './HanaTrump_5Brights.jpg';
import imgHanaTrumpExtra from './HanaTrump_Extra.jpg';
import imgKyoHana from './KyoHana.jpg';
import imgNishikiBrights from './Nishiki_Brights.jpg';
import imgAngelJokers from './Angel_Jokers.jpg';
import imgMatsuiBrights from './Matsui_Brights.jpg';
import imgMarioBrights from './Nintendo_Mario_Brights.jpg';
import { monitorEventLoopDelay } from 'perf_hooks';

const Manufacturers: React.FC<ArticleContentProps> = ({cite}) => {
    return (
        <section id="manufacturers">
        <h3>Packaging</h3>
        <p>The branding system of traditional <Noun lang="ja-Latn">Hanafuda</Noun> manufacturers can be confusing. Generally the brand (indicated by the artwork on the box or wrapper) indicates the quality of the cards, and the <em>type</em> of cards is written on the end. So a box of Nintendo cards with Napoleon on the front indicates their highest-quality card, but can contain either <Noun lang="ja-Latn">Hanafuda</Noun> or <Noun lang="ja-Latn">Kabufuda</Noun> cards.</p>
        <ArticleImage
            position="small"
            src={imgNintendoEnd}
            alt="The end of a Hanafuda wrapper with Japanese writing indicating its contents.">
            The end of a <Noun lang="ja-Latn">Nintendō</Noun> wrapper indicating that it contains<br/>standard (<span lang="ja">八々花</span> <span lang="ja-Latn">hachihachibana</span>) Hanafuda cards, with black (<span lang="ja">黒</span>) backs.
        </ArticleImage>
        <h3>Manufacturer’s marks</h3>
        <p>Within the deck, the manufacturer’s mark is nowadays always on one of the Paulownia junk cards, but on older decks it is often on the Peony, or another card entirely.</p>
        <ArticleImage
            position="small"
            src={imgMarks}
            alt="Three cards all featuring Paulownia flowers, with maker’s marks printed upon them.">
            Manufacturer’s marks from <Noun lang="ja-Latn">Nintendo</Noun>, Angel, and <Noun lang="ja-Latn">Maruē</Noun>.</ArticleImage>
        <p>Often the mark is a simplified version of the name, or a different <span lang="ja-Latn">kanji</span>, usually combined with a geometric shape. When pronouncing the mark the shape is usually also ‘read’, so that Nintendo’s mark—a stylized <span lang="ja">福</span> (<span lang="ja-Latn">fuku</span> ‘good fortune’) inside a circle—is read <span lang="ja-Latn">maru-fuku</span> ‘circle-fuku’, much like the brand “<a href="https://en.wikipedia.org/wiki/Circle_K">Circle K</a>”. The same can also be done with the square  (<span lang="ja">角</span> <span lang="ja-Latn">kaku</span>), a corner at top-right (┐) can be described as a carpenter’s square  (<span lang="ja">矩</span> <span lang="ja-Latn">kane</span>), and a corner pointing updwards (∧) can be a mountain (<span lang="ja">山</span> <span lang="ja-Latn">yama</span>).</p>
        <h2>Japanese Manufacturers</h2>
        <p>All current Japanese manufacturers that I know of are based in <Noun lang="ja-Latn">Kyōto</Noun> prefecture.</p>
        <section id="nintendo">
          <h3><Noun lang="ja-Latn">Nintendō</Noun></h3>
          <ArticleImage
            position="right"
            src={imgNintendo}
            alt="A Hanafuda wrapper featuring an image of Napoleon on the front.">
            <Noun lang="ja-Latn">Nintendō</Noun>’s <span lang="ja-Latn">Daitōryō</span> packaging (1970s). Note the <Noun lang="ja-Latn">Marufuku</Noun> mark at top right.
          </ArticleImage>
          <p>Founded in <Noun lang="jp-Latn">Kyōto</Noun> in 1889, Nintendo is the most prominent company producing <Noun lang="jp-Latn">Hanafuda</Noun> cards today. Out of all the types of cards they previously produced, today they only produce <Noun lang="ja-Latn">Hanafuda</Noun> and <Noun lang="ja-Latn">Kabufuda</Noun> cards. Their current brands are: <span lang="ja-Latn">Daitōryō</span> <span lang="ja">大統領</span> ‘president’ (featuring a picture of Napoleon); <span lang="ja-Latn">Marufuku Tengu</span> <span lang="ja">丸福天狗</span> (<Noun lang="ja-Latn">Marufuku</Noun> being <Noun lang="ja-Latn">Nintendo</Noun>’s manufacturer’s mark); and <span lang="ja-Latn">Miyako no Hana</span> <span lang="ja">都の花</span> ‘flowers of the city’.</p>
          <p>Previously <Noun lang="ja-Latn">Nintendō</Noun> produced many varieties of local cards or <Noun lang="ja-Latn">Mefuda</Noun>.</p>
          <p>One interesting deck they used to produce was <b>Hana-Trump</b>, which combined <Noun lang="ja-Latn">Hanafuda</Noun> cards with the cards of the international standard playing card deck. Each rank of the standard pack corresponds to a month of the <Noun lang="ja-Latn">Hanafuda</Noun> deck:</p>
          <ArticleImage
            src={imgHanaTrump5Brights}
            alt="The 5 bright cards from a Hana-Trump deck, which are hanafuda cards printed on the center of the standard international playing card deck.">
            The 5 Brights of <Noun lang="ja-Latn">Nintendō</Noun>’s “Hana-Trump” deck.
          </ArticleImage>
          <p>Because there are four more cards in the standard deck compared to the <Noun lang="ja-Latn">Hanafuda</Noun> one, <Noun lang="ja-Latn">Nintendō</Noun> added an additional four cards (and two jokers) to the set. These extra cards are counterparts for specialized pieces of equipment present in boxed <Noun lang="ja-Latn">Hachi-Hachi</Noun> (<span lang="ja">八八</span>) sets.</p>
          <ArticleImage
            src={imgHanaTrumpExtra}
            alt="Four additional cards corresponding to the Kings of the standard deck, and one joker card.">
          The extra cards of <Noun lang="ja-Latn">Nintendō</Noun>’s “Hana-Trump” deck. From left-to-right, after the joker, these are: a blindfolded samurai, with text reading <span lang="ja"><q>不見出</q></span> (88 sets have a piece labelled <span lang="ja"><q>不見転</q></span>, ‘loose morals’); a <span lang="ja-Latn">gunbai</span> (<span lang="ja">軍配</span>), a military leader’s fan which is nowadays used by sumo referees, which is inscribed <span lang="ja"><q>跡絶之章</q></span> (pause prize, 88 sets have a piece labelled <span lang="ja"><q>両桐絶体之章</q></span>); a rice winnowing basket (<span lang="ja">箕</span> <span lang="ja-Latn">mi</span>) inscribed <span lang="ja"><q>手役之章</q></span> (hand-<span lang="ja-Latn">yaku</span> prize); and an award medal reading <span lang="ja"><q>吟見勲賞</q></span> (<span lang="ja-Latn">Ginmi Kunshō</span>, ‘<span lang="ja-Latn">Ginmi</span> Medal’), which is a prize for the ‘top player’ (<span lang="ja-Latn">Ginmi</span>, usually spelt <span lang="ja">吟味</span>, 88 sets have a piece labelled <span lang="ja">銀見勲章</span>).
          </ArticleImage>
          <p>Currently Nintendo also produce many novelty decks themed to their videogame characters, such as Mario (pictured below), Pokémon, Mario Pikachu (limited, 2017), Kirby (2020), among others.</p>
          <ArticleImage
            src={imgMarioBrights}
            alt="TODO">
            Nintendo’s Mario deck, featuring recurring characters from the Mario series.
          </ArticleImage>
          <p>Older Nintendo brands included:{cite(ModernJapaneseWrappers, [54])}</p>
          <ul>
            <li><span lang="ja">大統領</span> (<span lang="ja-Latn">daitoryō</span>, ‘president’)</li>
            <li><span lang="ja">お多福</span> (<span lang="ja-Latn">otafuku</span>, ‘moon-faced woman’)</li>
            <li><span lang="ja">天狗</span> (<span lang="ja-Latn">tengu</span>, ‘<Noun lang="ja-Latn">Tengu</Noun>’)</li>
            <li><span lang="ja">大将</span> (<span lang="ja-Latn">taishō</span>, ‘general’)</li>
            <li><span lang="ja">白梅</span> (<span lang="ja-Latn">shira ume</span>, ‘white plum’), not in use as of 1980</li>
            <li><span lang="ja">櫻乃山</span> (<span lang="ja-Latn">sakura no yama</span>, ‘mountain cherry blossoms’), not in use as of 1980</li>
            <li><span lang="ja">朝日桜</span> (<span lang="ja-Latn">asahi sakura</span>, ‘sunrise cherry blossoms’)</li>
            <li><span lang="ja">三羽鶴</span> (<span lang="ja-Latn">san-ba tsuru</span>, ‘three cranes’), not in use as of 1980</li>
            <li><span lang="ja">大天狗</span> (<span lang="ja-Latn">dai tengu</span>, ‘chief <Noun lang="ja-Latn">Tengu</Noun>’), introduced in 1977</li>
          </ul>
        </section>
        <section id="oishi-tengudo">
          <h3><a href="https://www.tengudo.jp/" className="proper-noun" lang="ja-Latn">Ōishi Tengudō</a> (<span lang="ja">大石天狗堂</span>)</h3>
          <p>Also based in <Noun lang="ja-Latn">Kyōto</Noun>, <Noun lang="ja-Latn">Ōishi Tengudō</Noun> produces a wide variety of traditional Japanese card games. As far as I know, they are the only major manufacturer still producing <Noun lang="ja-Latn">Mefuda</Noun> cards. They also produce reproductions of even older cards, such as the <Noun lang="ja-Latn">Unsun</Noun> deck.</p>
          <ArticleImage
            src={imgOishiTengudo}
            alt="The front of a wooden Hanafuda box with a pasted-on image of a Tengu mask.">
            High-quality <Noun lang="ja-Latn">Ōishi Tengudō</Noun> decks come in Paulownia-wood boxes.
          </ArticleImage>
          <p>In addition to the many standard & local patterns of <Noun lang="ja-Latn">Hanafuda</Noun> they produce, they also publish some novelty decks, such as the <b><Noun lang="ja-Latn">Kyōto Hanafuda</Noun></b>:</p>
          <ArticleImage
            src={imgKyoHana}
            alt="Five hanafuda cards with depictions of landmarks and various aspects of Kyōto life.">
            The <Noun lang="ja-Latn">Kyōto Hanafuda</Noun>’s 5 Brights, showing icons and landmarks of <Noun lang="ja-Latn">Kyōto</Noun>.
            From left to right they represent: a fox with a jewel in its mouth, from the gate of the <a href="https://en.wikipedia.org/wiki/Fushimi_Inari-taisha"><Noun lang="ja-Latn">Fushimi Inari</Noun> shrine</a> (<span lang="ja">伏見稲荷大社</span>); <a href="https://en.wikipedia.org/wiki/Toyotomi_Hideyoshi"><Noun lang="ja-Latn">Toyotomi Hideyoshi</Noun></a> (<span lang="ja">豊臣秀吉</span>), <a href="https://en.wikipedia.org/wiki/K%C5%8Ddai-in"><Noun lang="ja-Latn">Kita no Mandokoro</Noun></a> (<span lang="ja">北政所</span>), and <a href="https://en.wikipedia.org/wiki/Yodo-dono"><Noun lang="ja-Latn">Yodogimi</Noun></a> (<span lang="ja">淀君</span>) at <a href="https://en.wikipedia.org/wiki/Fushimi_Castle">Fushimi Castle</a> (<span lang="ja">伏見城</span>); the character <span lang="ja">大</span> (<span lang="ja-Latn">dai</span>, ‘large’), which is lit on fire on mount <Noun lang="ja-Latn">Daimonji</Noun> (<span lang="ja">大文字山</span>) during the festival of <a href="https://en.wikipedia.org/wiki/Gozan_no_Okuribi"><Noun lang="ja-Latn">Gozan no Okuribi</Noun></a> (<span lang="ja">五山送り火</span>, ‘five mountain fire’); the warrior monk <a href="https://en.wikipedia.org/wiki/Benkei"><Noun lang="ja-Latn">Benkei</Noun></a> (<span lang="ja">弁慶</span>) meeting <a href="https://en.wikipedia.org/wiki/Minamoto_no_Yoshitsune"><Noun lang="ja-Latn">Minamoto no Yoshitsune</Noun></a> (<span lang="ja">源義経</span>), who is playing the flute, at <Noun lang="ja-Latn">Gojō</Noun> bridge (<span lang="ja">五条橋</span>); and the <a href="https://en.wikipedia.org/wiki/Kyoto_Sanga_FC"><Noun lang="ja-Latn">Kyōto Sanga</Noun></a> (<span lang="ja">京都サンガ</span>) football club, whose logo contains the Chinese/Japanese phoenix that is normally featured on the Paulownia bright card.
          </ArticleImage>
          <p>Older brands produced by <Noun lang="ja-Latn">Ōishi Tengudō</Noun> included:{cite(ModernJapaneseWrappers, [[57, 58]])}</p>
          <ul>
            <li><span lang="ja">金天狗</span> (<span lang="ja-Latn">kin tengu</span>, ‘golden <Noun lang="ja-Latn">Tengu</Noun>’), also used for <Noun lang="ja-Latn">Kabu</Noun> and <Noun lang="ja-Latn">Tehonbiki</Noun> cards</li>
            <li><span lang="ja">銀天狗</span> (<span lang="ja-Latn">gin tengu</span>, ‘silver <Noun lang="ja-Latn">Tengu</Noun>’), also used for <Noun lang="ja-Latn">Kabufuda</Noun></li>
            <li><span lang="ja">成金</span> (<span lang="ja-Latn">narikin</span>, ‘newly rich’, derived from a <Noun lang="ja-Latn">Shogi</Noun> term), also used for <Noun lang="ja-Latn">Kabufuda</Noun></li>
            <li><span lang="ja">リンカン</span> (<span lang="ja-Latn">rinkan</span>, ‘Lincoln’), no longer in use as of 1979</li>
            <li><span lang="ja">福助</span> (<span lang="ja-Latn">fukusuke</span>, a <a href="https://en.wikipedia.org/wiki/Fukusuke">large-headed good luck doll</a>), no longer in use as of 1979</li>
            <li><span lang="ja">當矢</span> (<span lang="ja-Latn">atari ya</span>, ‘winning arrow’)</li>
            <li><span lang="ja">四季</span> (<span lang="ja-Latn">shiki</span>, ‘four seasons’)</li>
            <li><span lang="ja">大江山</span> (<span lang="ja-Latn">ōeyama</span>, <a href="https://en.wikipedia.org/wiki/%C5%8Ceyama">a mountain near <Noun lang="ja-Latn">Kyōto</Noun></a>)</li>
          </ul>
        </section>
        <section id="angel">
          <h3><a href="http://www.angelplayingcards.com/product/hana.php">Angel</a> (<span lang="ja">エンゼル</span> <span lang="ja-Latn">enzeru</span>)</h3>
          <ArticleImage
            position="right"
            src={imgGenroku}
            alt="The front of a Hanafuda wrapper reading ‘genroku’ in Japanese characters and with cherry blossoms.">
            Angel’s <span lang="ja-Latn">Genroku</span> packaging (1970s).
          </ArticleImage>
          <p>Originally based in <Noun lang="ja-Latn">Yōkaichi</Noun> (now <Noun lang="ja-Latn">Higashiōmi</Noun>), <Noun lang="ja-Latn">Shiga</Noun> prefecture, now based in <Noun lang="ja-Latn">Kyōto</Noun>. They currently produce <Noun lang="ja-Latn">Hanafuda</Noun> and <Noun lang="ja-Latn">Kabufuda</Noun> in two brands: <span lang="ja">千鳥</span> (<span lang="ja-Latn">chidori</span> ‘numerous birds’) and <span lang="ja">元禄</span> (<span lang="ja-Latn">Genroku</span>, an era which spanned 1688–1704).</p>
          <p>Older brands included:{cite(ModernJapaneseWrappers, [45])}</p>
          <ul>
            <li><span lang="ja">玉将</span> (<span lang="ja-Latn">gyokushō</span> ‘king of the lesser player’, a <Noun lang ="ja-Latn">Shōgi</Noun> term)</li>
            <li><span lang="ja">翁</span> (<span lang="ja-Latn">okina</span> ‘old man’)</li>
            <li><span lang="ja">泰平</span> (<span lang="ja-Latn">tai hei</span> ‘tranquility’)</li>
            <li><span lang="ja">纏</span> (<span lang="ja-Latn">matoi</span> ‘<a href="https://en.wikipedia.org/wiki/Matoi">fireman’s standard</a>’, also used for <Noun lang="ja-Latn">Kabufuda</Noun>)</li>
            <li><span lang="ja">旅</span> (<span lang="ja-Latn">tabi</span> ‘trip’)</li>
          </ul>
          <p>Angel also produces cardboard novelty <Noun lang="ja-Latn">hanafuda</Noun> for brands like Disney and Hello Kitty, and both <Noun lang="ja-Latn">Hyakunin Isshu</Noun> and <Noun lang="ja-Latn">Iroha Karuta</Noun>.</p>
          <p>At one point they produced a Hana-Trump deck with similar construction to that of Nintendo’s (above).</p>
          <ArticleImage
            src={imgAngelJokers}
            alt="Four additional cards corresponding to the Kings of the standard deck, and one joker card.">
            The extra cards of Angel’s “Hana-Trump” deck. 
          </ArticleImage>
        </section>
        <section id="tamura-shogundo">
          <h3><a href="http://www.shogundo.co.jp/" className="proper-noun" lang="ja-Latn">Tamura Shōgundō</a> (<span lang="ja">田村将軍堂</span>)</h3>
          <ArticleImage
            position="right"
            alt="A box of hanafuda cards with a depiction of an apprentice geisha under blossoms and autumn leaves on the front."
            src={imgShogundo}>
            <Noun lang="ja-Latn">Tamura Shōgun-dō</Noun>’s <span lang="ja-Latn">Kyō maiko</span> brand.
          </ArticleImage>
          <p>A small manufacturer (founded in either 1921 or 1963?). They produce <Noun lang="ja-Latn">Hyakunin Isshu</Noun>, <Noun lang="ja-Latn">Manyo Karuta</Noun>, and <Noun lang="ja-Latn">Hanafuda</Noun>.</p>
          <p>Most of <Noun lang="ja-Latn">Tamura Shōgun-dō</Noun>’s cards are produced with hand-wrapped backing paper; they have <a href="http://www5f.biglobe.ne.jp/~karutaya/brand.html">another web page that details their manufacturing process</a>.</p>
          <p><Noun lang="ja-Latn">Tamura</Noun> manufactures two types of <Noun lang="ja-Latn">Hanafuda</Noun> cards:</p>
          <ol>
            <li>
              The standard pattern, with brands in decreasing order of quality (these have been maintained since the 1970s):{cite(ModernJapaneseWrappers, [39])}
              <ul>
                <li><span lang="ja">紫宸殿</span> (<span lang="ja-Latn">Shishinden</span>, the ceremonial hall of <Noun lang="ja-Latn">Kyōto</Noun> Imperial Palace)</li>
                <li><span lang="ja">大将軍</span> (<span lang="ja-Latn">daishōgun</span>, ‘general’), also used for <Noun lang="ja-Latn">Kabu</Noun>, <Noun lang="ja-Latn">Tehonbiki</Noun>, <Noun lang="ja-Latn">Shiro</Noun> (blank) cards</li> 
                <li><span lang="ja">満点</span> (<span lang="ja-Latn">manten</span>, ‘perfect score’), also <Noun lang="ja-Latn">Kabufuda</Noun></li>
                <li><span lang="ja">栄光</span> (<span lang="ja-Latn">eikō</span>, ‘glory’), also <Noun lang="ja-Latn">Kabufuda</Noun></li>
                <li><span lang="ja">京乃錦</span> (<span lang="ja-Latn">Kyō no nishiki</span>, ‘brocade of <Noun lang="ja-Latn">Kyōto</Noun>’, indicating the autumn leaves)</li>
                <li><span lang="ja">花くらべ</span> (<span lang="ja-Latn">hanakurabe</span>, ‘comparing flowers’)</li>
                <li><span lang="ja">夜桜</span> (<span lang="ja-Latn">yozakura</span>, ‘evening cherry blossoms’)</li>
                <li><span lang="ja">春風</span> (<span lang="ja-Latn">harukaze</span>, ‘spring breeze’), also used for <Noun lang="ja-Latn">Kabufuda</Noun></li>
                <li><span lang="ja">花あそび</span> (<span lang="ja-Latn">hana asobi</span>, ‘flower playing’), no longer in use as of 2019</li>
                <li><span lang="ja">世界長</span> (<span lang="ja-Latn">sekaichō</span>, ‘world leader’), no longer in use as of 1980</li>
                <li><span lang="ja">宝玉</span> (<span lang="ja-Latn">hōgyoku</span>, ‘jewel’), no longer in use as of 1980</li>
                <li><span lang="ja">将軍</span> (<span lang="ja-Latn">shōgun</span>, <Noun lang="ja-Latn">Shogun</Noun>), used for <Noun lang="ja-Latn">Tehonbiki</Noun> only</li>
                <li><span lang="ja">総帥</span> (<span lang="ja-Latn">sōsui</span>, ‘commander-in-chief’), no longer in use as of 1980</li>
              </ul>
            </li>
            <li>
              Their revised pattern, <Noun lang="ja-Latn">Nishiki</Noun> (<span lang="ja">錦</span>), which is larger and has a squarer format than standard cards, and is printed with more, bolder colours. This is sold with brands:
              <ul>
                <li><span lang="ja">京舞妓</span> <span lang="ja-Latn">Kyō maiko</span>, ‘<Noun lang="ja-Latn">Kyōto maiko</Noun>’ (an apprentice <span lang="ja-Latn">geisha</span>)</li>
                <li><span lang="ja">祇園茶屋</span> <span lang="ja-Latn">Gion chaya</span>, ‘<Noun lang="ja-Latn">Gion</Noun> teahouse’ (a district of <Noun lang="ja-Latn">Kyōto</Noun>)</li>
                <li><span lang="ja">にしき花かるた</span> <span lang="ja-Latn">Nishiki hana karuta</span>, ‘<Noun lang="ja-Latn">Nishiki</Noun> flower cards’</li>
              </ul>
            </li>
          </ol>
          <ArticleImage
              src={imgNishikiBrights}
              alt="Five hanafuda cards with very bold colours, unlike normal hanafuda cards.">
              The 5 Brights of the <span lang="ja-Latn">Nishiki</span> pattern.
          </ArticleImage>
        </section>
        <h2>Extinct Japanese Producers</h2>
        <p>These are producers that do not exist any more.</p>
        <section id="matsui-tengudo">
          <h3><Noun lang="ja-Latn">Matsui Tengu-dō</Noun> (<span lang="ja">松井天狗堂</span>)</h3>
          <p><Noun lang="ja-Latn">Matsui Tengudō</Noun> appears to have been the last Japanese manufacturer making cards entirely by hand.{cite(SalterJapanese)} It was founded in <Noun lang="ja-Latn">Kyōto</Noun> in 1897 by <Noun lang="ja-Latn">Matsui Shigejiro</Noun> (<span lang="ja">松井重次郎</span>), and was run by the <Noun lang="ja-Latn">Matsui</Noun> family for three generations until it closed in 2010 after <Noun lang="ja-Latn">Matsui Shigeo</Noun> (<span lang="ja">松井重夫</span>) retired.{cite(IwanoMatsui)} Since closing, their decks now fetch high prices on Yahoo! Auctions, often selling for several hundred US dollars.</p>
          <ArticleImage
            src={imgMatsuiBrights}
            alt="TODO">
            The 5 Bright cards from a deck produced by <Noun lang="ja-Latn">Matsui Tengudō</Noun> to demonstrate their printing technique (1978).
          </ArticleImage>
          <p><Noun lang="ja-Latn">Matsui</Noun> brands included:</p>
          <ul>
            <li><span lang="ja">鳳凰</span> (<span lang="ja-Latn">hōō</span>, the Japanese phoenix)</li>
            <li><span lang="ja">龍虎</span> (<span lang="ja-Latn">ryū ko</span>, ‘dragon and tiger’), also used for <Noun lang="ja-Latn">Kabu</Noun>, <Noun lang="ja-Latn">Tehonbiki</Noun>, and <Noun lang="ja-Latn">Komaru</Noun> cards</li>
            <li><span lang="ja">九一</span> (<span lang="ja-Latn">kuppin</span>, ‘nine and one’, the highest combination in <Noun lang="ja-Latn">Kabufuda</Noun> games), used for <Noun lang="ja-Latn">Kabu</Noun> cards only</li>
            <li><span lang="ja">金龍</span> (<span lang="ja-Latn">kin ryū</span>, ‘gold dragon’), used for <Noun lang="ja-Latn">Komaru</Noun> cards only</li>
            <li><span lang="ja">菊華</span> (<span lang="ja-Latn">kikka</span>, ‘chrysanthemum’)</li>
            <li><span lang="ja">牡丹</span> (<span lang="ja-Latn">botan</span>, ‘peony’)</li>
            <li><span lang="ja">冨士櫻</span> (<span lang="ja-Latn">fuji sakura</span>, ‘<Noun lang="ja-Latn">Fuji</Noun> cherry blossoms’), also used for <Noun lang="ja-Latn">Kabufuda</Noun></li>
            <li><span lang="ja">三光</span> (<span lang="ja-Latn">sankō</span>, ‘three brights’)</li>
          </ul>
        </section>
        <section id="ace">
          <h3>Ace (<span lang="ja">エース</span> <span lang="ja-Latn">ēsu</span>)</h3>
          <ArticleImage
            position="right"
            src={imgAce}
            alt="A Hanafuda wrapper with the image of a European nobleman on the front.">
            Packaging of Ace’s <Noun lang="ja-Latn">Dai Kōshaku</Noun> brand; this is from a <Noun lang="ja-Latn">Kurofuda deck</Noun>.
          </ArticleImage>
          <p>Ace was a manufacturer based in <Noun lang="ja-Latn">Kyōto</Noun>. Their brands included:{cite(ModernJapaneseWrappers, [44])}</p>
          <ul>
            <li><span lang="ja">大公爵</span> (<span lang="ja-Latn">dai kōshaku</span> ‘grand duke’, also used for <Noun lang="ja-Latn">Kabufuda</Noun>)</li>
            <li><span lang="ja">大西郷</span> (<span lang="ja-Latn">dai saigō</span> ‘great <a href="https://en.wikipedia.org/wiki/Saig%C5%8D_Takamori">Saigō</a>’)</li>
            <li><span lang="ja">エース</span> (<span lang="ja-Latn">ēsu</span>, also used for <Noun lang="ja-Latn">Kabufuda</Noun>)</li>
            <li><span lang="ja">大提督</span> (<span lang="ja-Latn">dai teitoku</span> ‘grand admiral’)</li>
            <li><span lang="ja">大勝利</span> (<span lang="ja-Latn">dai shōri</span> ‘huge win’)</li>
            <li><span lang="ja">紅葉</span> (<span lang="ja-Latn">momiji</span> ‘autumn leaves’)</li>
          </ul>
          <p>They also made two all-plastic <Noun lang="ja-Latn">Hanafuda</Noun> decks: <span lang="ja">金花</span> (<span lang="ja-Latn">kin-hana</span> ‘gold flowers’) and <span lang="ja">銀花</span> (<span lang="ja-Latn">gin-hana</span> ‘silver flowers’).</p>
        </section>
        <section>
          <h3><Noun lang="ja-Latn">Maruē</Noun> (<span lang="ja">マルエー</span>)</h3>
          <p><Noun lang="ja-Latn">Maruē</Noun> was from the city of <Noun lang="ja-Latn">Mino</Noun>, in <Noun lang="ja-Latn">Gifu</Noun> prefecture. Their manufacturer’s mark was a circled <span lang="ja">英</span> (<span lang="ja-Latn">ē</span>), i.e. <span lang="ja-Latn">maru-ē</span>. However, <span lang="ja">英</span> has the meaning of ‘flower’ and can also be read with the same pronunciation as <span lang="ja">花</span> <span lang="ja-Latn">hana</span>, making this mark very punny.</p>
          <ArticleImage
            position="small"
            src={imgMarue}
            alt="A Hanafuda wrapper with an image of cherry blossoms on the front.">
            Packaging for <Noun lang="ja-Latn">Maruē</Noun>’s <Noun lang="ja-Latn">Goten Sakura</Noun> brand (1970s).
          </ArticleImage>
          <p>Brands produced by <Noun lang="ja-Latn">Maruē</Noun> included:{cite(ModernJapaneseWrappers, [52])}</p>
          <ul>
            <li><span lang="ja">東洋一</span> (<span lang="ja-Latn">tōyō ichi</span>, ‘best in the East’), also used for <Noun lang="ja-Latn">Kabufuda</Noun></li>
            <li><span lang="ja">金獅子</span> (<span lang="ja-Latn">kin jishi</span>, ‘gold lion’), also used for <Noun lang="ja-Latn">Kabufuda</Noun> and <Noun lang="ja-Latn">Tehonbiki</Noun> cards</li>
            <li><span lang="ja">金龍</span> (<span lang="ja-Latn">kin ryū</span>, ‘gold dragon’)</li>
            <li><span lang="ja">銀龍</span> (<span lang="ja-Latn">gin ryū</span>, ‘silver dragon’), also used for <Noun lang="ja-Latn">Kabufuda</Noun></li>
            <li><span lang="ja">御殿櫻</span> (<span lang="ja-Latn">goten sakura</span>, ‘palace cherry blossoms’)</li>
          </ul>
        </section>
        <h3>Other extinct producers</h3>
        <h4>From <Noun lang="ja-Latn">Kyōto</Noun></h4>
        <p>Most of the information about these was producers was found in <Noun lang="ja-Latn">Yamaguchi</Noun>’s book.{cite(Yamaguchi, [102])}</p>
        <ul>
          <li><Noun lang="ja-Latn">Tanaka Gyokusuidō</Noun> (<span lang="ja">田中玉水堂</span>). Existed in 1948,{cite(Yamaguchi, [102])} stopped producing in the early 1960s;{cite(ModernJapaneseWrappers, [33])} mark was <span lang="ja">田</span> with corner on top. The brand <Noun lang="ja-Latn">Fukusuke</Noun> and manufacturer’s mark were taken over by <Noun lang="ja-Latn">Iwata Honten</Noun>.</li>
          <li><Noun lang="ja-Latn">Iwata Honten</Noun>, <Noun lang="ja-Latn">Kyōto</Noun> (<span lang="ja">岩田本手</span>). Had its own brands but cards were made by <Noun lang="ja-Latn">Tamura Shōgun-dō</Noun>). Brands included:{cite(ModernJapaneseWrappers, [48])}
            <ul>
              <li><span lang="ja">福助</span> (<span lang="ja-Latn">fukusuke</span>, a <a href="https://en.wikipedia.org/wiki/Fukusuke">large-headed good luck doll</a>)</li>
              <li><span lang="ja">銀末広</span> (<span lang="ja-Latn">gin suehiro</span> ‘silver fan’)</li>
            </ul>
          </li>
          <li><Noun lang="ja-Latn">Nihon Karuta Seizō</Noun>, <Noun lang="ja-Latn">Kyōto</Noun> (<span lang="ja">日本骨牌製造</span>). Existed in 1948{cite(Yamaguchi, [102])} and early 1980s; mark was <span lang="ja">中</span> with corner at top-right. Brands included:{cite(ModernJapaneseWrappers, [[54,55]])}
            <ul>
              <li><span lang="ja">花の王</span> (<span lang="ja-Latn">hana no ō</span>, ‘queen of flowers’, the <a href="https://en.wikipedia.org/wiki/Cattleya">Cattleya</a>)</li>
              <li><span lang="ja">七福神</span> (<span lang="ja-Latn">shichi fukujin</span>, the <a href="https://en.wikipedia.org/wiki/Seven_Lucky_Gods">Seven Lucky Gods</a>)</li>
              <li><span lang="ja">特性大隊長</span> (<span lang="ja-Latn">tokusei daitaichō</span>, ‘special battalion commander’)</li>
              <li><span lang="ja">特性ふじ</span> (<span lang="ja-Latn">tokusei fuji</span>, ‘special <Noun lang="ja-Latn">Fuji</Noun>’)</li>
              <li><span lang="ja">四光</span> (<span lang="ja-Latn">shi kō</span>, ‘four brights’)</li>
              <li><span lang="ja">金の仲</span> (<span lang="ja-Latn">kane no naka</span>, ‘golden relationship’, a reference to the trademark pronounced <span lang="ja-Latn">kane-naka</span>)</li>
              <li><span lang="ja">百万ドル</span> (<span lang="ja-Latn">hyakuman doru</span>, ‘a million dollars’)</li>
              <li><span lang="ja">天狗</span> (<span lang="ja-Latn">tengu</span>, Tengu)</li>
              <li><span lang="ja">ふじ</span> (<span lang="ja-Latn">fuji</span>, <Noun lang="ja-Latn">Fuji</Noun>)</li>
              <li><span lang="ja">万両</span> (<span lang="ja-Latn">man ryū</span>, ‘10&thinsp;000 coins’)</li>
              <li><span lang="ja">千両</span> (<span lang="ja-Latn">sen ryū</span>, ‘1000 coins’)</li>
              <li><span lang="ja">九重櫻</span> (<span lang="ja-Latn">kokonoe sakura</span>, ‘<Noun lang="ja-Latn">Kokonoe</Noun> cherry blossoms’)</li>
            </ul>
          </li>
          <li><Noun lang="ja-Latn">Yamashiro Shōten</Noun> (<span lang="ja">山城商店</span>). Existed in 1948, stopped producing in 1962;{cite(ModernJapaneseWrappers, [33])} mark was a circled <span lang="ja">十</span>. Brands included:
            <ul>
              <li>TODO</li>
            </ul>
          </li>
          <li><Noun lang="ja-Latn">Ryūtendō</Noun> (<span lang="ja">龍天堂</span>). Existed in 1948; mark was a circled <span lang="ja">龍</span>.</li>
          <li><Noun lang="ja-Latn">Inoue Juntendō</Noun> (<span lang="ja">井上順天堂</span>). Existed in 1948; mark was a circled <span lang="ja">順</span>.</li>
          <li><Noun lang="ja-Latn">Nakao Seikadō</Noun> (<span lang="ja">中尾清花堂</span>). Existed in 1948; mark was <span lang="ja">セ</span> with corner at top-right.</li>
          <li><Noun lang="ja-Latn">Baba Keieidō</Noun> (<span lang="ja">馬場京栄堂</span>). Existed in 1948; mark was a circled <span lang="ja">京</span>.</li>
        </ul>
        <h4>Elsewhere</h4>
        <p>I have very little information about these producers other than that they existed. The information here is mostly taken from {cite(ModernJapaneseWrappers, undefined, {inline: true})}.</p>
        <ul>
          <li>Heibon (<span lang="ja">平凡</span>), Tōkyō. Stopped producing shortly after 1972.{cite(ModernJapaneseWrappers, [42])} Brands included:
            <ul>
              <li><span lang="ja">四天王</span> (<span lang="ja-Latn">shi tennō</span> the <a href="https://en.wikipedia.org/wiki/Four_Heavenly_Kings">four heavenly kings</a>, also used for <Noun lang="ja-Latn">Kabufuda</Noun>)</li>
              <li><span lang="ja">牡丹獅子</span> (<span lang="ja-Latn">botan shishi</span> ‘peony and lion’, also used for <Noun lang="ja-Latn">Kabufuda</Noun>)</li>
              <li><span lang="ja">金時桜</span> (<span lang="ja-Latn">kintoki sakura</span> ‘<a href="https://en.wikipedia.org/wiki/Kintar%C5%8D">Kintoki</a> and cherry blossom’)</li>
              <li><span lang="ja">旭富士</span> (<span lang="ja-Latn">asahi fuji</span> ‘<Noun lang="ja-Latn">Fuji</Noun> sunrise’)</li>
              <li><span lang="ja">桜判官</span> (<span lang="ja-Latn">sakura hangan</span> ‘cherry blossom judge’, apparently a reference to a judge with a cherry blossom tattoo)</li>
            </ul>
          </li>
          <li><Noun lang="ja-Latn">Kawakita</Noun> (<span lang="ja">川北</span>, own brands but cards made by <Noun lang="ja-Latn">Yamashiro Shōten</Noun>; closed after 1962).{cite(ModernJapaneseWrappers, [[48, 49]])} Brands included:
            <ul>
              <li><span lang="ja">牛若丸</span> (<span lang="ja-Latn">ushiwakamaru</span>, the childhood name of <a href="https://en.wikipedia.org/wiki/Minamoto_no_Yoshitsune" lang="ja-Latn" className="proper-noun">Minamoto no Yoshitsune</a>)</li>
              <li><span lang="ja">金閣寺</span> (<span lang="ja-Latn">kinkaku-ji</span>, the Golden Pavilion in <Noun lang="ja-Latn">Kyōto</Noun>)</li>
              <li><span lang="ja">銀閣寺</span> (<span lang="ja-Latn">ginkaku-ji</span>, the Silver Pavilion in <Noun lang="ja-Latn">Kyōto</Noun>)</li>
              <li><span lang="ja">弁慶</span> (<span lang="ja-Latn">benkei</span>, <a href="https://en.wikipedia.org/wiki/Benkei">a famous warrior monk</a>)</li>
              <li><span lang="ja">大文字</span> (<span lang="ja-Latn">daimonji</span>, <a href="https://en.wikipedia.org/wiki/Gozan_no_Okuribi">a mountain in <Noun lang="ja-Latn">Kyōto</Noun></a>)</li>
              <li><span lang="ja">祇園</span> (<span lang="ja-Latn">gion</span>, the <span lang="ja-Latn">geisha</span> district of <Noun lang="ja-Latn">Kyōto</Noun>)</li>
            </ul>
          </li>
          <li><Noun lang="ja-Latn">Kohara Honten</Noun>, <Noun lang="ja-Latn">Ōsaka</Noun> (<span lang="ja">小原本店</span>, manufacturer until 1980).{cite(ModernJapaneseWrappers, [48])} Manufacturer’s mark was a circled <span lang="ja">さ</span>, and brands included:
            <ul>
              <li><span lang="ja">鬼印</span> (<span lang="ja-Latn">oni jirushi</span>, ‘ogre brand’, also for <Noun lang="ja-Latn">Kabufuda</Noun> and <Noun lang="ja-Latn">Harifuda</Noun>)</li>
              <li><span lang="ja">王将</span> (<span lang="ja-Latn">ōshō</span>, the king of the stronger player in <Noun lang="ja-Latn">Shōgi</Noun>, also used for <Noun lang="ja-Latn">Kabufuda</Noun>)</li>
              <li><span lang="ja">大登龍</span> (<span lang="ja-Latn">daitoryū</span>, ‘great rising dragon’, also used for <Noun lang="ja-Latn">Kabufuda</Noun>)</li>
              <li><span lang="ja">金札印</span> (<span lang="ja-Latn">kinfuda jirushi</span>, ‘golden card brand’)</li>
              <li><span lang="ja">鍾馗</span> (<span lang="ja-Latn">shōki</span>, <a href="https://en.wikipedia.org/wiki/Zhong_Kui"><Noun lang="ja-Latn">Shōki</Noun> the demon-queller</a>)</li>
              <li><span lang="ja">馬印</span> (<span lang="ja-Latn">uma jirushi</span>, ‘horse brand’)</li>
              <li><span lang="ja">宝船</span> (<span lang="ja-Latn">takarabune</span>, ‘treasure ship’)</li>
              <li><span lang="ja">寶引</span> (<span lang="ja-Latn">hobiki</span>, ‘treasure pull’, a kind of lottery where one rope out of a bundle was tied to the prize, and whoever pulled it won; these were <Noun lang="ja-Latn">Hikifuda</Noun> cards)</li>
            </ul>
          </li>
          <li><Noun lang="ja-Latn">Nishimura</Noun>, <Noun lang="ja-Latn">Tōkyō</Noun> (<span lang="ja">西村</span>). At first an important manufacturer, but later cards were made by other makers including <Noun lang="ja-Latn">Ōishi Tengudō</Noun>. Brands included:{cite(ModernJapaneseWrappers, [54, 58])}
            <ul>
              <li><span lang="ja">金助六</span> (<span lang="ja-Latn">kin sukeroku</span>, ‘golden <a href="https://en.wikipedia.org/wiki/Sukeroku" className="proper-noun" lang="ja-Latn">Sukeroku</a>’)</li>
              <li><span lang="ja">銀助六</span> (<span lang="ja-Latn">gin sukeroku</span>, ‘silver Sukeroku’)</li>
              <li><span lang="ja">小天狗</span> (<span lang="ja-Latn">ko tengu</span>, ‘little <Noun lang="ja-Latn">Tengu</Noun>’)</li>
              <li><span lang="ja">花の花</span> (<span lang="ja-Latn">hana no hana</span>, ‘flower of flowers’)</li>
              <li><span lang="ja">白雪</span> (<span lang="ja-Latn">shira yuki</span>, ‘white snow’)</li>
              <li><span lang="ja">百万石</span> (<span lang="ja-Latn">hyakuman goku</span>, ‘one million <a href="https://en.wikipedia.org/wiki/Koku" lang="ja-Latn">koku</a>’, a nickname for the rich <a lang="ja-Latn" href="https://en.wikipedia.org/wiki/Kaga_Domain">Kaga domain</a>, or its lord, in the <Noun lang="ja-Latn">Edo</Noun> period), no longer produced as of 1980</li>
              <li><span lang="ja">奴さん</span> (<span lang="ja-Latn">yakko san</span>, ‘guy’, a samurai manservant, also a traditional origami shape imitating a man), no longer produced as of 1980</li>
            </ul>
           </li>
          <li><Noun lang="ja-Latn">Kyōto Karuta</Noun>, <Noun lang="ja-Latn">Kyōto</Noun> (<span lang="ja">京都かるた</span>). Brands included:
            <ul>
              <li><span lang="ja">金の司</span> (<span lang="ja-Latn">kin no tsukasa</span> ‘officer of gold’)</li>
              <li><span lang="ja">大帝王</span> (<span lang="ja-Latn">dai teiō</span> ‘great emperor’, also used for <Noun lang="ja-Latn">Kabufuda</Noun>)</li>
              <li><span lang="ja">神鉾</span> (<span lang="ja-Latn">kami hoko</span> ‘sacred halberd’, also used for <Noun lang="ja-Latn">Kabufuda</Noun>)</li>
              <li><span lang="ja">つかさ天狗</span> (<span lang="ja-Latn">tsukasa tengu</span>, ‘chief tengu’)</li>
              <li><span lang="ja">花あらし</span> (<span lang="ja-Latn">hana arashi</span>, ‘flower storm’, a heavy fall of blossoms)</li>
              <li><span lang="ja">短冊</span> (<span lang="ja-Latn">tanzaku</span>, ‘poetry strip’)</li>
              <li><span lang="ja">ぼたん</span> (<span lang="ja-Latn">botan</span>, ‘peony’)</li>
            </ul>
          </li>
          <li>Dai Nippon, Yōkaichi (now part of Higashiōmi), Shiga prefecture. Brands included:{cite(ModernJapaneseWrappers, [46])}
            <ul>
              <li><span lang="ja">銀達磨</span> (<span lang="ja-Latn">gin daruma</span> ‘silver <a href="https://en.wikipedia.org/wiki/Bodhidharma">Daruma</a>’)</li>
              <li><span lang="ja">千姫</span> (<span lang="ja-Latn">senhime</span> ‘<a href="https://en.wikipedia.org/wiki/Senhime">Lady Sen</a>’)</li>
              <li><span lang="ja">銀瓠</span> (<span lang="ja-Latn">gin hyō</span> ‘silver gourd’)</li>
              <li><span lang="ja">金瓠</span> (<span lang="ja-Latn">kin hyō</span> ‘gold gourd’)</li>
              <li><span lang="ja">豊太閤</span> (<span lang="ja-Latn">hōtaikō</span>, a title of honour for <a href="https://en.wikipedia.org/wiki/Toyotomi_Hideyoshi">Toyotomi Hideyoshi</a>)</li>
            </ul>
          </li>
          <li><a href="http://www.nichiyu.net/en" className="proper-noun" lang="ja-Latn">Nippon Yūgi Gangu</a> (<span lang="ja">日本遊戯玩具</span>), Tōkyō (founded 1946). Still exists but no longer appears to produce <Noun lang="ja-Latn">Hanafuda</Noun> cards, specializes in tarot. Older brands included:{cite(ModernJapaneseWrappers, [54])}
            <ul>
              <li><span lang="ja">白鶴</span> (<span lang="ja-Latn">haku tsuru</span>, ‘white crane’)</li>
              <li><span lang="ja">(日遊)金天狗</span> (<span lang="ja-Latn">(nichi yū) kin tengu</span>, ‘<Noun lang="ja-Latn">Nippon Yūgi</Noun> golden <Noun lang="ja-Latn">Tengu</Noun>’)</li>
              <li><span lang="ja">鳳</span> (<span lang="ja-Latn">ōtori</span>, ‘splendid bird’, a male Japanese phoenix)</li>
              <li><span lang="ja">宴</span> (<span lang="ja-Latn">utage</span>, ‘banquet’)</li>
              <li><span lang="ja">大入り</span> (<span lang="ja-Latn">ōiri</span>, ‘full house’)</li>
              <li><span lang="ja">兜</span> (<span lang="ja-Latn">kabuto</span>, ‘samurai helmet’)</li>
              <li><span lang="ja">花川戸</span> (<span lang="ja-Latn">hanakawado</span>, a place in <Noun lang="ja-Latn">Tōkyō</Noun>)</li>
              <li><span lang="ja">花あわせ</span> (<span lang="ja-Latn">hana awase</span>, ‘flower matching’)</li>
            </ul>
          </li> 
          <li>Universal, Ōsaka (<span lang="ja">ユニバーサル</span>). At one time Universal produced cards (such as the Hana-Trump deck) for Nintendo. Brands included:{cite(ModernJapaneseWrappers, [59, 62])}
            <ul>
              <li><span lang="ja">ゴム花</span> (<span lang="ja-Latn">gomu hana</span>, ‘rubber flower’)</li>
              <li><span lang="ja">萬年花</span> (<span lang="ja-Latn">man-nen hana</span>, ‘10&thinsp;000 year flower’)</li>
            </ul>
          </li>
        </ul>
        </section>
    );
};

export default Manufacturers;
