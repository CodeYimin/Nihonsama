import { randElements } from './random';

export interface Kana {
	kana: string;
	roumaji: string;
	type: string;
}

const hiragana: readonly Kana[] = [
	{
		kana: 'あ',
		roumaji: 'a',
		type: 'gojuuon'
	},
	{
		kana: 'い',
		roumaji: 'i',
		type: 'gojuuon'
	},
	{
		kana: 'う',
		roumaji: 'u',
		type: 'gojuuon'
	},
	{
		kana: 'え',
		roumaji: 'e',
		type: 'gojuuon'
	},
	{
		kana: 'お',
		roumaji: 'o',
		type: 'gojuuon'
	},
	{
		kana: 'か',
		roumaji: 'ka',
		type: 'gojuuon'
	},
	{
		kana: 'き',
		roumaji: 'ki',
		type: 'gojuuon'
	},
	{
		kana: 'く',
		roumaji: 'ku',
		type: 'gojuuon'
	},
	{
		kana: 'け',
		roumaji: 'ke',
		type: 'gojuuon'
	},
	{
		kana: 'こ',
		roumaji: 'ko',
		type: 'gojuuon'
	},
	{
		kana: 'さ',
		roumaji: 'sa',
		type: 'gojuuon'
	},
	{
		kana: 'し',
		roumaji: 'shi',
		type: 'gojuuon'
	},
	{
		kana: 'す',
		roumaji: 'su',
		type: 'gojuuon'
	},
	{
		kana: 'せ',
		roumaji: 'se',
		type: 'gojuuon'
	},
	{
		kana: 'そ',
		roumaji: 'so',
		type: 'gojuuon'
	},
	{
		kana: 'た',
		roumaji: 'ta',
		type: 'gojuuon'
	},
	{
		kana: 'ち',
		roumaji: 'chi',
		type: 'gojuuon'
	},
	{
		kana: 'つ',
		roumaji: 'tsu',
		type: 'gojuuon'
	},
	{
		kana: 'て',
		roumaji: 'te',
		type: 'gojuuon'
	},
	{
		kana: 'と',
		roumaji: 'to',
		type: 'gojuuon'
	},
	{
		kana: 'な',
		roumaji: 'na',
		type: 'gojuuon'
	},
	{
		kana: 'に',
		roumaji: 'ni',
		type: 'gojuuon'
	},
	{
		kana: 'ぬ',
		roumaji: 'nu',
		type: 'gojuuon'
	},
	{
		kana: 'ね',
		roumaji: 'ne',
		type: 'gojuuon'
	},
	{
		kana: 'の',
		roumaji: 'no',
		type: 'gojuuon'
	},
	{
		kana: 'は',
		roumaji: 'ha',
		type: 'gojuuon'
	},
	{
		kana: 'ひ',
		roumaji: 'hi',
		type: 'gojuuon'
	},
	{
		kana: 'ふ',
		roumaji: 'fu',
		type: 'gojuuon'
	},
	{
		kana: 'へ',
		roumaji: 'he',
		type: 'gojuuon'
	},
	{
		kana: 'ほ',
		roumaji: 'ho',
		type: 'gojuuon'
	},
	{
		kana: 'ま',
		roumaji: 'ma',
		type: 'gojuuon'
	},
	{
		kana: 'み',
		roumaji: 'mi',
		type: 'gojuuon'
	},
	{
		kana: 'む',
		roumaji: 'mu',
		type: 'gojuuon'
	},
	{
		kana: 'め',
		roumaji: 'me',
		type: 'gojuuon'
	},
	{
		kana: 'も',
		roumaji: 'mo',
		type: 'gojuuon'
	},
	{
		kana: 'や',
		roumaji: 'ya',
		type: 'gojuuon'
	},
	{
		kana: 'ゆ',
		roumaji: 'yu',
		type: 'gojuuon'
	},
	{
		kana: 'よ',
		roumaji: 'yo',
		type: 'gojuuon'
	},
	{
		kana: 'ら',
		roumaji: 'ra',
		type: 'gojuuon'
	},
	{
		kana: 'り',
		roumaji: 'ri',
		type: 'gojuuon'
	},
	{
		kana: 'る',
		roumaji: 'ru',
		type: 'gojuuon'
	},
	{
		kana: 'れ',
		roumaji: 're',
		type: 'gojuuon'
	},
	{
		kana: 'ろ',
		roumaji: 'ro',
		type: 'gojuuon'
	},
	{
		kana: 'わ',
		roumaji: 'wa',
		type: 'gojuuon'
	},
	{
		kana: 'を',
		roumaji: 'wo',
		type: 'gojuuon'
	},
	{
		kana: 'ん',
		roumaji: 'n',
		type: 'gojuuon'
	},
	{
		kana: 'が',
		roumaji: 'ga',
		type: 'dakuon'
	},
	{
		kana: 'ぎ',
		roumaji: 'gi',
		type: 'dakuon'
	},
	{
		kana: 'ぐ',
		roumaji: 'gu',
		type: 'dakuon'
	},
	{
		kana: 'げ',
		roumaji: 'ge',
		type: 'dakuon'
	},
	{
		kana: 'ご',
		roumaji: 'go',
		type: 'dakuon'
	},
	{
		kana: 'ざ',
		roumaji: 'za',
		type: 'dakuon'
	},
	{
		kana: 'じ',
		roumaji: 'ji',
		type: 'dakuon'
	},
	{
		kana: 'ず',
		roumaji: 'zu',
		type: 'dakuon'
	},
	{
		kana: 'ぜ',
		roumaji: 'ze',
		type: 'dakuon'
	},
	{
		kana: 'ぞ',
		roumaji: 'zo',
		type: 'dakuon'
	},
	{
		kana: 'だ',
		roumaji: 'da',
		type: 'dakuon'
	},
	{
		kana: 'ぢ',
		roumaji: 'ji',
		type: 'dakuon'
	},
	{
		kana: 'づ',
		roumaji: 'zu',
		type: 'dakuon'
	},
	{
		kana: 'で',
		roumaji: 'de',
		type: 'dakuon'
	},
	{
		kana: 'ど',
		roumaji: 'do',
		type: 'dakuon'
	},
	{
		kana: 'ば',
		roumaji: 'ba',
		type: 'dakuon'
	},
	{
		kana: 'び',
		roumaji: 'bi',
		type: 'dakuon'
	},
	{
		kana: 'ぶ',
		roumaji: 'bu',
		type: 'dakuon'
	},
	{
		kana: 'べ',
		roumaji: 'be',
		type: 'dakuon'
	},
	{
		kana: 'ぼ',
		roumaji: 'bo',
		type: 'dakuon'
	},
	{
		kana: 'ぱ',
		roumaji: 'pa',
		type: 'handakuon'
	},
	{
		kana: 'ぴ',
		roumaji: 'pi',
		type: 'handakuon'
	},
	{
		kana: 'ぷ',
		roumaji: 'pu',
		type: 'handakuon'
	},
	{
		kana: 'ぺ',
		roumaji: 'pe',
		type: 'handakuon'
	},
	{
		kana: 'ぽ',
		roumaji: 'po',
		type: 'handakuon'
	},
	{
		kana: 'きゃ',
		roumaji: 'kya',
		type: 'youon'
	},
	{
		kana: 'きゅ',
		roumaji: 'kyu',
		type: 'youon'
	},
	{
		kana: 'きょ',
		roumaji: 'kyo',
		type: 'youon'
	},
	{
		kana: 'しゃ',
		roumaji: 'sha',
		type: 'youon'
	},
	{
		kana: 'しゅ',
		roumaji: 'shu',
		type: 'youon'
	},
	{
		kana: 'しょ',
		roumaji: 'sho',
		type: 'youon'
	},
	{
		kana: 'ちゃ',
		roumaji: 'cha',
		type: 'youon'
	},
	{
		kana: 'ちゅ',
		roumaji: 'chu',
		type: 'youon'
	},
	{
		kana: 'ちょ',
		roumaji: 'cho',
		type: 'youon'
	},
	{
		kana: 'にゃ',
		roumaji: 'nya',
		type: 'youon'
	},
	{
		kana: 'にゅ',
		roumaji: 'nyu',
		type: 'youon'
	},
	{
		kana: 'にょ',
		roumaji: 'nyo',
		type: 'youon'
	},
	{
		kana: 'ひゃ',
		roumaji: 'hya',
		type: 'youon'
	},
	{
		kana: 'ひゅ',
		roumaji: 'hyu',
		type: 'youon'
	},
	{
		kana: 'ひょ',
		roumaji: 'hyo',
		type: 'youon'
	},
	{
		kana: 'みゃ',
		roumaji: 'mya',
		type: 'youon'
	},
	{
		kana: 'みゅ',
		roumaji: 'myu',
		type: 'youon'
	},
	{
		kana: 'みょ',
		roumaji: 'myo',
		type: 'youon'
	},
	{
		kana: 'りゃ',
		roumaji: 'rya',
		type: 'youon'
	},
	{
		kana: 'りゅ',
		roumaji: 'ryu',
		type: 'youon'
	},
	{
		kana: 'りょ',
		roumaji: 'ryo',
		type: 'youon'
	},
	{
		kana: 'ぎゃ',
		roumaji: 'gya',
		type: 'youon'
	},
	{
		kana: 'ぎゅ',
		roumaji: 'gyu',
		type: 'youon'
	},
	{
		kana: 'ぎょ',
		roumaji: 'gyo',
		type: 'youon'
	},
	{
		kana: 'じゃ',
		roumaji: 'ja',
		type: 'youon'
	},
	{
		kana: 'じゅ',
		roumaji: 'ju',
		type: 'youon'
	},
	{
		kana: 'じょ',
		roumaji: 'jo',
		type: 'youon'
	},
	{
		kana: 'びゃ',
		roumaji: 'bya',
		type: 'youon'
	},
	{
		kana: 'びゅ',
		roumaji: 'byu',
		type: 'youon'
	},
	{
		kana: 'びょ',
		roumaji: 'byo',
		type: 'youon'
	},
	{
		kana: 'ぴゃ',
		roumaji: 'pya',
		type: 'youon'
	},
	{
		kana: 'ぴゅ',
		roumaji: 'pyu',
		type: 'youon'
	},
	{
		kana: 'ぴょ',
		roumaji: 'pyo',
		type: 'youon'
	},
	{
		kana: 'いぃ',
		roumaji: 'yi',
		type: 'extended'
	},
	{
		kana: 'いぇ',
		roumaji: 'ye',
		type: 'extended'
	},
	{
		kana: 'ゔぁ',
		roumaji: 'va',
		type: 'extended'
	},
	{
		kana: 'ゔぃ',
		roumaji: 'vi',
		type: 'extended'
	},
	{
		kana: 'ゔ',
		roumaji: 'vu',
		type: 'extended'
	},
	{
		kana: 'ゔぇ',
		roumaji: 've',
		type: 'extended'
	},
	{
		kana: 'ゔぉ',
		roumaji: 'vo',
		type: 'extended'
	},
	{
		kana: 'ゔゃ',
		roumaji: 'vya',
		type: 'extended'
	},
	{
		kana: 'ゔゅ',
		roumaji: 'vyu',
		type: 'extended'
	},
	{
		kana: 'ゔょ',
		roumaji: 'vyo',
		type: 'extended'
	},
	{
		kana: 'しぇ',
		roumaji: 'she',
		type: 'extended'
	},
	{
		kana: 'じぇ',
		roumaji: 'je',
		type: 'extended'
	},
	{
		kana: 'ちぇ',
		roumaji: 'che',
		type: 'extended'
	},
	{
		kana: 'すぁ',
		roumaji: 'swa',
		type: 'extended'
	},
	{
		kana: 'すぃ',
		roumaji: 'swi',
		type: 'extended'
	},
	{
		kana: 'すぅ',
		roumaji: 'swu',
		type: 'extended'
	},
	{
		kana: 'すぇ',
		roumaji: 'swe',
		type: 'extended'
	},
	{
		kana: 'すぉ',
		roumaji: 'swo',
		type: 'extended'
	},
	{
		kana: 'すゃ',
		roumaji: 'sya',
		type: 'extended'
	},
	{
		kana: 'すゅ',
		roumaji: 'syu',
		type: 'extended'
	},
	{
		kana: 'すょ',
		roumaji: 'syo',
		type: 'extended'
	},
	{
		kana: 'せぃ',
		roumaji: 'si',
		type: 'extended'
	},
	{
		kana: 'ずぁ',
		roumaji: 'zwa',
		type: 'extended'
	},
	{
		kana: 'ずぃ',
		roumaji: 'zwi',
		type: 'extended'
	},
	{
		kana: 'ずぅ',
		roumaji: 'zwu',
		type: 'extended'
	},
	{
		kana: 'ずぇ',
		roumaji: 'zwe',
		type: 'extended'
	},
	{
		kana: 'ずぉ',
		roumaji: 'zwo',
		type: 'extended'
	},
	{
		kana: 'ずゃ',
		roumaji: 'zya',
		type: 'extended'
	},
	{
		kana: 'ずゅ',
		roumaji: 'zyu',
		type: 'extended'
	},
	{
		kana: 'ずょ',
		roumaji: 'zyo',
		type: 'extended'
	},
	{
		kana: 'ゼぃ',
		roumaji: 'zi',
		type: 'extended'
	},
	{
		kana: 'つぁ',
		roumaji: 'tsa',
		type: 'extended'
	},
	{
		kana: 'つぃ',
		roumaji: 'tsi',
		type: 'extended'
	},
	{
		kana: 'つぇ',
		roumaji: 'tse',
		type: 'extended'
	},
	{
		kana: 'つぉ',
		roumaji: 'tso',
		type: 'extended'
	},
	{
		kana: 'てぁ',
		roumaji: 'tha',
		type: 'extended'
	},
	{
		kana: 'てぃ',
		roumaji: 'ti',
		type: 'extended'
	},
	{
		kana: 'てぅ',
		roumaji: 'thu',
		type: 'extended'
	},
	{
		kana: 'てぇ',
		roumaji: 'tye',
		type: 'extended'
	},
	{
		kana: 'てぉ',
		roumaji: 'tho',
		type: 'extended'
	},
	{
		kana: 'てゃ',
		roumaji: 'tya',
		type: 'extended'
	},
	{
		kana: 'てゅ',
		roumaji: 'tyu',
		type: 'extended'
	},
	{
		kana: 'てょ',
		roumaji: 'tyo',
		type: 'extended'
	},
	{
		kana: 'でぁ',
		roumaji: 'dha',
		type: 'extended'
	},
	{
		kana: 'でぃ',
		roumaji: 'di',
		type: 'extended'
	},
	{
		kana: 'でぅ',
		roumaji: 'dhu',
		type: 'extended'
	},
	{
		kana: 'でぇ',
		roumaji: 'dye',
		type: 'extended'
	},
	{
		kana: 'でぉ',
		roumaji: 'dho',
		type: 'extended'
	},
	{
		kana: 'でゃ',
		roumaji: 'dya',
		type: 'extended'
	},
	{
		kana: 'でゅ',
		roumaji: 'dyu',
		type: 'extended'
	},
	{
		kana: 'でょ',
		roumaji: 'dyo',
		type: 'extended'
	},
	{
		kana: 'とぁ',
		roumaji: 'twa',
		type: 'extended'
	},
	{
		kana: 'とぃ',
		roumaji: 'twi',
		type: 'extended'
	},
	{
		kana: 'とぅ',
		roumaji: 'tu',
		type: 'extended'
	},
	{
		kana: 'とぇ',
		roumaji: 'twe',
		type: 'extended'
	},
	{
		kana: 'とぉ',
		roumaji: 'two',
		type: 'extended'
	},
	{
		kana: 'どぁ',
		roumaji: 'dwa',
		type: 'extended'
	},
	{
		kana: 'どぃ',
		roumaji: 'dwi',
		type: 'extended'
	},
	{
		kana: 'どぃ',
		roumaji: 'du',
		type: 'extended'
	},
	{
		kana: 'どぇ',
		roumaji: 'dwe',
		type: 'extended'
	},
	{
		kana: 'どぉ',
		roumaji: 'dwo',
		type: 'extended'
	},
	{
		kana: 'ふぁ',
		roumaji: 'fa',
		type: 'extended'
	},
	{
		kana: 'ふぃ',
		roumaji: 'fi',
		type: 'extended'
	},
	{
		kana: 'ほぅ',
		roumaji: 'hu',
		type: 'extended'
	},
	{
		kana: 'ふぇ',
		roumaji: 'fe',
		type: 'extended'
	},
	{
		kana: 'ふぉ',
		roumaji: 'fo',
		type: 'extended'
	},
	{
		kana: 'ふゃ',
		roumaji: 'fya',
		type: 'extended'
	},
	{
		kana: 'ふゅ',
		roumaji: 'fyu',
		type: 'extended'
	},
	{
		kana: 'ふょ',
		roumaji: 'fyo',
		type: 'extended'
	},
	{
		kana: 'りぃ',
		roumaji: 'ryi',
		type: 'extended'
	},
	{
		kana: 'りぇ',
		roumaji: 'rye',
		type: 'extended'
	},
	{
		kana: 'うぃ',
		roumaji: 'wi',
		type: 'extended'
	},
	{
		kana: 'うぇ',
		roumaji: 'we',
		type: 'extended'
	},
	{
		kana: 'うぉ',
		roumaji: 'wo',
		type: 'extended'
	},
	{
		kana: 'うゃ',
		roumaji: 'wya',
		type: 'extended'
	},
	{
		kana: 'うゅ',
		roumaji: 'wyu',
		type: 'extended'
	},
	{
		kana: 'うょ',
		roumaji: 'wyo',
		type: 'extended'
	},
	{
		kana: 'くぁ',
		roumaji: 'kwa',
		type: 'extended'
	},
	{
		kana: 'くぃ',
		roumaji: 'kwi',
		type: 'extended'
	},
	{
		kana: 'くぅ',
		roumaji: 'kwu',
		type: 'extended'
	},
	{
		kana: 'くぇ',
		roumaji: 'kwe',
		type: 'extended'
	},
	{
		kana: 'くぉ',
		roumaji: 'kwo',
		type: 'extended'
	},
	{
		kana: 'ぐぁ',
		roumaji: 'gwa',
		type: 'extended'
	},
	{
		kana: 'ぐぃ',
		roumaji: 'gwi',
		type: 'extended'
	},
	{
		kana: 'ぐぅ',
		roumaji: 'gwu',
		type: 'extended'
	},
	{
		kana: 'ぐぇ',
		roumaji: 'gwe',
		type: 'extended'
	},
	{
		kana: 'ぐぉ',
		roumaji: 'gwe',
		type: 'extended'
	},
	{
		kana: 'むぁ',
		roumaji: 'mwa',
		type: 'extended'
	},
	{
		kana: 'むぃ',
		roumaji: 'mwi',
		type: 'extended'
	},
	{
		kana: 'むぅ',
		roumaji: 'mwu',
		type: 'extended'
	},
	{
		kana: 'むぇ',
		roumaji: 'mwe',
		type: 'extended'
	},
	{
		kana: 'むぉ',
		roumaji: 'mwo',
		type: 'extended'
	}
] as const;

const katakana: readonly Kana[] = [
	{
		kana: 'ア',
		roumaji: 'a',
		type: 'gojuuon'
	},
	{
		kana: 'イ',
		roumaji: 'i',
		type: 'gojuuon'
	},
	{
		kana: 'ウ',
		roumaji: 'u',
		type: 'gojuuon'
	},
	{
		kana: 'エ',
		roumaji: 'e',
		type: 'gojuuon'
	},
	{
		kana: 'オ',
		roumaji: 'o',
		type: 'gojuuon'
	},
	{
		kana: 'カ',
		roumaji: 'ka',
		type: 'gojuuon'
	},
	{
		kana: 'キ',
		roumaji: 'ki',
		type: 'gojuuon'
	},
	{
		kana: 'ク',
		roumaji: 'ku',
		type: 'gojuuon'
	},
	{
		kana: 'ケ',
		roumaji: 'ke',
		type: 'gojuuon'
	},
	{
		kana: 'コ',
		roumaji: 'ko',
		type: 'gojuuon'
	},
	{
		kana: 'サ',
		roumaji: 'sa',
		type: 'gojuuon'
	},
	{
		kana: 'シ',
		roumaji: 'shi',
		type: 'gojuuon'
	},
	{
		kana: 'ス',
		roumaji: 'su',
		type: 'gojuuon'
	},
	{
		kana: 'セ',
		roumaji: 'se',
		type: 'gojuuon'
	},
	{
		kana: 'ソ',
		roumaji: 'so',
		type: 'gojuuon'
	},
	{
		kana: 'タ',
		roumaji: 'ta',
		type: 'gojuuon'
	},
	{
		kana: 'チ',
		roumaji: 'chi',
		type: 'gojuuon'
	},
	{
		kana: 'ツ',
		roumaji: 'tsu',
		type: 'gojuuon'
	},
	{
		kana: 'テ',
		roumaji: 'te',
		type: 'gojuuon'
	},
	{
		kana: 'ト',
		roumaji: 'to',
		type: 'gojuuon'
	},
	{
		kana: 'ナ',
		roumaji: 'na',
		type: 'gojuuon'
	},
	{
		kana: 'ニ',
		roumaji: 'ni',
		type: 'gojuuon'
	},
	{
		kana: 'ヌ',
		roumaji: 'nu',
		type: 'gojuuon'
	},
	{
		kana: 'ネ',
		roumaji: 'ne',
		type: 'gojuuon'
	},
	{
		kana: 'ノ',
		roumaji: 'no',
		type: 'gojuuon'
	},
	{
		kana: 'ハ',
		roumaji: 'ha',
		type: 'gojuuon'
	},
	{
		kana: 'ヒ',
		roumaji: 'hi',
		type: 'gojuuon'
	},
	{
		kana: 'フ',
		roumaji: 'hu',
		type: 'gojuuon'
	},
	{
		kana: 'ヘ',
		roumaji: 'he',
		type: 'gojuuon'
	},
	{
		kana: 'ホ',
		roumaji: 'ho',
		type: 'gojuuon'
	},
	{
		kana: 'マ',
		roumaji: 'ma',
		type: 'gojuuon'
	},
	{
		kana: 'ミ',
		roumaji: 'mi',
		type: 'gojuuon'
	},
	{
		kana: 'ム',
		roumaji: 'mu',
		type: 'gojuuon'
	},
	{
		kana: 'メ',
		roumaji: 'me',
		type: 'gojuuon'
	},
	{
		kana: 'モ',
		roumaji: 'mo',
		type: 'gojuuon'
	},
	{
		kana: 'ヤ',
		roumaji: 'ya',
		type: 'gojuuon'
	},
	{
		kana: 'ユ',
		roumaji: 'yu',
		type: 'gojuuon'
	},
	{
		kana: 'ヨ',
		roumaji: 'yo',
		type: 'gojuuon'
	},
	{
		kana: 'ラ',
		roumaji: 'ra',
		type: 'gojuuon'
	},
	{
		kana: 'リ',
		roumaji: 'ri',
		type: 'gojuuon'
	},
	{
		kana: 'ル',
		roumaji: 'ru',
		type: 'gojuuon'
	},
	{
		kana: 'レ',
		roumaji: 're',
		type: 'gojuuon'
	},
	{
		kana: 'ロ',
		roumaji: 'ro',
		type: 'gojuuon'
	},
	{
		kana: 'ワ',
		roumaji: 'wa',
		type: 'gojuuon'
	},
	{
		kana: 'ヲ',
		roumaji: 'wo',
		type: 'gojuuon'
	},
	{
		kana: 'ン',
		roumaji: 'n',
		type: 'gojuuon'
	},
	{
		kana: 'ガ',
		roumaji: 'ga',
		type: 'dakuon'
	},
	{
		kana: 'ギ',
		roumaji: 'gi',
		type: 'dakuon'
	},
	{
		kana: 'グ',
		roumaji: 'gu',
		type: 'dakuon'
	},
	{
		kana: 'ゲ',
		roumaji: 'ge',
		type: 'dakuon'
	},
	{
		kana: 'ゴ',
		roumaji: 'go',
		type: 'dakuon'
	},
	{
		kana: 'ザ',
		roumaji: 'za',
		type: 'dakuon'
	},
	{
		kana: 'ジ',
		roumaji: 'ji',
		type: 'dakuon'
	},
	{
		kana: 'ズ',
		roumaji: 'zu',
		type: 'dakuon'
	},
	{
		kana: 'ゼ',
		roumaji: 'ze',
		type: 'dakuon'
	},
	{
		kana: 'ゾ',
		roumaji: 'zo',
		type: 'dakuon'
	},
	{
		kana: 'ダ',
		roumaji: 'da',
		type: 'dakuon'
	},
	{
		kana: 'ヂ',
		roumaji: 'ji',
		type: 'dakuon'
	},
	{
		kana: 'ヅ',
		roumaji: 'zu',
		type: 'dakuon'
	},
	{
		kana: 'デ',
		roumaji: 'de',
		type: 'dakuon'
	},
	{
		kana: 'ド',
		roumaji: 'do',
		type: 'dakuon'
	},
	{
		kana: 'バ',
		roumaji: 'ba',
		type: 'dakuon'
	},
	{
		kana: 'ビ',
		roumaji: 'bi',
		type: 'dakuon'
	},
	{
		kana: 'ブ',
		roumaji: 'bu',
		type: 'dakuon'
	},
	{
		kana: 'ベ',
		roumaji: 'be',
		type: 'dakuon'
	},
	{
		kana: 'ボ',
		roumaji: 'bo',
		type: 'dakuon'
	},
	{
		kana: 'パ',
		roumaji: 'pa',
		type: 'handakuon'
	},
	{
		kana: 'ピ',
		roumaji: 'pi',
		type: 'handakuon'
	},
	{
		kana: 'プ',
		roumaji: 'pu',
		type: 'handakuon'
	},
	{
		kana: 'ペ',
		roumaji: 'pe',
		type: 'handakuon'
	},
	{
		kana: 'ポ',
		roumaji: 'po',
		type: 'handakuon'
	},
	{
		kana: 'キャ',
		roumaji: 'kya',
		type: 'youon'
	},
	{
		kana: 'キュ',
		roumaji: 'kyu',
		type: 'youon'
	},
	{
		kana: 'キョ',
		roumaji: 'kyo',
		type: 'youon'
	},
	{
		kana: 'シャ',
		roumaji: 'sha',
		type: 'youon'
	},
	{
		kana: 'シュ',
		roumaji: 'shu',
		type: 'youon'
	},
	{
		kana: 'ショ',
		roumaji: 'sho',
		type: 'youon'
	},
	{
		kana: 'チャ',
		roumaji: 'cha',
		type: 'youon'
	},
	{
		kana: 'チュ',
		roumaji: 'chu',
		type: 'youon'
	},
	{
		kana: 'チョ',
		roumaji: 'cho',
		type: 'youon'
	},
	{
		kana: 'ニャ',
		roumaji: 'nya',
		type: 'youon'
	},
	{
		kana: 'ニュ',
		roumaji: 'nyu',
		type: 'youon'
	},
	{
		kana: 'ニョ',
		roumaji: 'nyo',
		type: 'youon'
	},
	{
		kana: 'ヒャ',
		roumaji: 'hya',
		type: 'youon'
	},
	{
		kana: 'ヒュ',
		roumaji: 'hyu',
		type: 'youon'
	},
	{
		kana: 'ヒョ',
		roumaji: 'hyo',
		type: 'youon'
	},
	{
		kana: 'ミャ',
		roumaji: 'mya',
		type: 'youon'
	},
	{
		kana: 'ミュ',
		roumaji: 'myu',
		type: 'youon'
	},
	{
		kana: 'ミョ',
		roumaji: 'myo',
		type: 'youon'
	},
	{
		kana: 'リャ',
		roumaji: 'rya',
		type: 'youon'
	},
	{
		kana: 'リュ',
		roumaji: 'ryu',
		type: 'youon'
	},
	{
		kana: 'リョ',
		roumaji: 'ryo',
		type: 'youon'
	},
	{
		kana: 'ギャ',
		roumaji: 'gya',
		type: 'youon'
	},
	{
		kana: 'ギュ',
		roumaji: 'gyu',
		type: 'youon'
	},
	{
		kana: 'ギョ',
		roumaji: 'gyo',
		type: 'youon'
	},
	{
		kana: 'ジャ',
		roumaji: 'ja',
		type: 'youon'
	},
	{
		kana: 'ジュ',
		roumaji: 'ju',
		type: 'youon'
	},
	{
		kana: 'ジョ',
		roumaji: 'jo',
		type: 'youon'
	},
	{
		kana: 'ビャ',
		roumaji: 'bya',
		type: 'youon'
	},
	{
		kana: 'ビュ',
		roumaji: 'byu',
		type: 'youon'
	},
	{
		kana: 'ビョ',
		roumaji: 'byo',
		type: 'youon'
	},
	{
		kana: 'ピャ',
		roumaji: 'pya',
		type: 'youon'
	},
	{
		kana: 'ピュ',
		roumaji: 'pyu',
		type: 'youon'
	},
	{
		kana: 'ピョ',
		roumaji: 'pyo',
		type: 'youon'
	},
	{
		kana: 'イィ',
		roumaji: 'yi',
		type: 'extended'
	},
	{
		kana: 'イェ',
		roumaji: 'ye',
		type: 'extended'
	},
	{
		kana: 'ヴァ',
		roumaji: 'va',
		type: 'extended'
	},
	{
		kana: 'ヴィ',
		roumaji: 'vi',
		type: 'extended'
	},
	{
		kana: 'ヴ',
		roumaji: 'vu',
		type: 'extended'
	},
	{
		kana: 'ヴェ',
		roumaji: 've',
		type: 'extended'
	},
	{
		kana: 'ヴォ',
		roumaji: 'vo',
		type: 'extended'
	},
	{
		kana: 'ヴャ',
		roumaji: 'vya',
		type: 'extended'
	},
	{
		kana: 'ヴュ',
		roumaji: 'vyu',
		type: 'extended'
	},
	{
		kana: 'ヴョ',
		roumaji: 'vyo',
		type: 'extended'
	},
	{
		kana: 'シェ',
		roumaji: 'she',
		type: 'extended'
	},
	{
		kana: 'ジェ',
		roumaji: 'je',
		type: 'extended'
	},
	{
		kana: 'チェ',
		roumaji: 'che',
		type: 'extended'
	},
	{
		kana: 'スァ',
		roumaji: 'swa',
		type: 'extended'
	},
	{
		kana: 'スィ',
		roumaji: 'swi',
		type: 'extended'
	},
	{
		kana: 'スゥ',
		roumaji: 'swu',
		type: 'extended'
	},
	{
		kana: 'スェ',
		roumaji: 'swe',
		type: 'extended'
	},
	{
		kana: 'スォ',
		roumaji: 'swo',
		type: 'extended'
	},
	{
		kana: 'スャ',
		roumaji: 'sya',
		type: 'extended'
	},
	{
		kana: 'スュ',
		roumaji: 'syu',
		type: 'extended'
	},
	{
		kana: 'スョ',
		roumaji: 'syo',
		type: 'extended'
	},
	{
		kana: 'セィ',
		roumaji: 'si',
		type: 'extended'
	},
	{
		kana: 'ズァ',
		roumaji: 'zwa',
		type: 'extended'
	},
	{
		kana: 'ズィ',
		roumaji: 'zwi',
		type: 'extended'
	},
	{
		kana: 'ズゥ',
		roumaji: 'zwu',
		type: 'extended'
	},
	{
		kana: 'ズェ',
		roumaji: 'zwe',
		type: 'extended'
	},
	{
		kana: 'ズォ',
		roumaji: 'zwo',
		type: 'extended'
	},
	{
		kana: 'ズャ',
		roumaji: 'zya',
		type: 'extended'
	},
	{
		kana: 'ズュ',
		roumaji: 'zyu',
		type: 'extended'
	},
	{
		kana: 'ズョ',
		roumaji: 'zyo',
		type: 'extended'
	},
	{
		kana: 'ゼィ',
		roumaji: 'zi',
		type: 'extended'
	},
	{
		kana: 'ツァ',
		roumaji: 'tsa',
		type: 'extended'
	},
	{
		kana: 'ツィ',
		roumaji: 'tsi',
		type: 'extended'
	},
	{
		kana: 'ツェ',
		roumaji: 'tse',
		type: 'extended'
	},
	{
		kana: 'ツォ',
		roumaji: 'tso',
		type: 'extended'
	},
	{
		kana: 'テァ',
		roumaji: 'tha',
		type: 'extended'
	},
	{
		kana: 'ティ',
		roumaji: 'ti',
		type: 'extended'
	},
	{
		kana: 'テゥ',
		roumaji: 'thu',
		type: 'extended'
	},
	{
		kana: 'テェ',
		roumaji: 'tye',
		type: 'extended'
	},
	{
		kana: 'テォ',
		roumaji: 'tho',
		type: 'extended'
	},
	{
		kana: 'テャ',
		roumaji: 'tya',
		type: 'extended'
	},
	{
		kana: 'テュ',
		roumaji: 'tyu',
		type: 'extended'
	},
	{
		kana: 'テョ',
		roumaji: 'tyo',
		type: 'extended'
	},
	{
		kana: 'デァ',
		roumaji: 'dha',
		type: 'extended'
	},
	{
		kana: 'ディ',
		roumaji: 'di',
		type: 'extended'
	},
	{
		kana: 'デゥ',
		roumaji: 'dhu',
		type: 'extended'
	},
	{
		kana: 'デェ',
		roumaji: 'dye',
		type: 'extended'
	},
	{
		kana: 'デォ',
		roumaji: 'dho',
		type: 'extended'
	},
	{
		kana: 'デャ',
		roumaji: 'dya',
		type: 'extended'
	},
	{
		kana: 'デュ',
		roumaji: 'dyu',
		type: 'extended'
	},
	{
		kana: 'デョ',
		roumaji: 'dyo',
		type: 'extended'
	},
	{
		kana: 'トァ',
		roumaji: 'twa',
		type: 'extended'
	},
	{
		kana: 'トィ',
		roumaji: 'twi',
		type: 'extended'
	},
	{
		kana: 'トゥ',
		roumaji: 'tu',
		type: 'extended'
	},
	{
		kana: 'トェ',
		roumaji: 'twe',
		type: 'extended'
	},
	{
		kana: 'トォ',
		roumaji: 'two',
		type: 'extended'
	},
	{
		kana: 'ドァ',
		roumaji: 'dwa',
		type: 'extended'
	},
	{
		kana: 'ドィ',
		roumaji: 'dwi',
		type: 'extended'
	},
	{
		kana: 'ドィ',
		roumaji: 'du',
		type: 'extended'
	},
	{
		kana: 'ドェ',
		roumaji: 'dwe',
		type: 'extended'
	},
	{
		kana: 'ドォ',
		roumaji: 'dwo',
		type: 'extended'
	},
	{
		kana: 'ファ',
		roumaji: 'fa',
		type: 'extended'
	},
	{
		kana: 'フィ',
		roumaji: 'fi',
		type: 'extended'
	},
	{
		kana: 'ホゥ',
		roumaji: 'hu',
		type: 'extended'
	},
	{
		kana: 'フェ',
		roumaji: 'fe',
		type: 'extended'
	},
	{
		kana: 'フォ',
		roumaji: 'fo',
		type: 'extended'
	},
	{
		kana: 'フャ',
		roumaji: 'fya',
		type: 'extended'
	},
	{
		kana: 'フュ',
		roumaji: 'fyu',
		type: 'extended'
	},
	{
		kana: 'フョ',
		roumaji: 'fyo',
		type: 'extended'
	},
	{
		kana: 'リィ',
		roumaji: 'ryi',
		type: 'extended'
	},
	{
		kana: 'リェ',
		roumaji: 'rye',
		type: 'extended'
	},
	{
		kana: 'ウィ',
		roumaji: 'wi',
		type: 'extended'
	},
	{
		kana: 'ウェ',
		roumaji: 'we',
		type: 'extended'
	},
	{
		kana: 'ウォ',
		roumaji: 'wo',
		type: 'extended'
	},
	{
		kana: 'ウャ',
		roumaji: 'wya',
		type: 'extended'
	},
	{
		kana: 'ウュ',
		roumaji: 'wyu',
		type: 'extended'
	},
	{
		kana: 'ウョ',
		roumaji: 'wyo',
		type: 'extended'
	},
	{
		kana: 'クァ',
		roumaji: 'kwa',
		type: 'extended'
	},
	{
		kana: 'クィ',
		roumaji: 'kwi',
		type: 'extended'
	},
	{
		kana: 'クゥ',
		roumaji: 'kwu',
		type: 'extended'
	},
	{
		kana: 'クェ',
		roumaji: 'kwe',
		type: 'extended'
	},
	{
		kana: 'クォ',
		roumaji: 'kwo',
		type: 'extended'
	},
	{
		kana: 'グァ',
		roumaji: 'gwa',
		type: 'extended'
	},
	{
		kana: 'グィ',
		roumaji: 'gwi',
		type: 'extended'
	},
	{
		kana: 'グゥ',
		roumaji: 'gwu',
		type: 'extended'
	},
	{
		kana: 'グェ',
		roumaji: 'gwe',
		type: 'extended'
	},
	{
		kana: 'グォ',
		roumaji: 'gwe',
		type: 'extended'
	},
	{
		kana: 'ムァ',
		roumaji: 'mwa',
		type: 'extended'
	},
	{
		kana: 'ムィ',
		roumaji: 'mwi',
		type: 'extended'
	},
	{
		kana: 'ムゥ',
		roumaji: 'mwu',
		type: 'extended'
	},
	{
		kana: 'ムェ',
		roumaji: 'mwe',
		type: 'extended'
	},
	{
		kana: 'ムォ',
		roumaji: 'mwo',
		type: 'extended'
	}
] as const;

export function getRandomKana(amount: number, filter: (kana: Kana) => boolean): Kana[] {
  const filteredKana = hiragana.filter(filter);
	return randElements(filteredKana, amount).map((hiragana) => ({ ...hiragana }));
}
