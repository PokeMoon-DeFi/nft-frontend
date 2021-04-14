import { ARTISTS, CARDS_SETS, POKEMOON_RARITY, POKEMOON_TYPES } from "../nftData";
import { PokemoonCard, PokemoonNft } from "../types";

export const BLAST_OFF_CARD_INFO: PokemoonCard[] = [
  {
    number: 1,
    name: "Meownaut",
    type: POKEMOON_TYPES.PSYCHIC,
    set: CARDS_SETS[2114],
    description:
      "Legend says that the bioluminescent coin in a Meownaut's chest is the source of its resilience and good fortune.",
    artist: ARTISTS.Armilo,
  },
  {
    number: 2,
    name: "Pikapuff",
    type: POKEMOON_TYPES.LIGHTNING,
    set: CARDS_SETS[2114],
    description: "That's gonna be a hit.",
    artist: ARTISTS.LilyPonto,
  },
  {
    number: 3,
    name: "Pikapuff",
    type: POKEMOON_TYPES.LIGHTNING,
    set: CARDS_SETS[2114],
    description:
      "I woke up under the table with a splitting headache, smoke coming out of my ears... and an unconquerable urge to buy a ticket to her next show.",
    artist: ARTISTS.LilyPonto,
  },
  {
    number: 4,
    name: "Rattish",
    type: POKEMOON_TYPES.GRASS,
    set: CARDS_SETS[2114],
    description:
      "There are rodents who can cook, and those who teach Kung Fu. But some of them just wish to sit and contemplate the view.",
    artist: ARTISTS.Ilya,
  },
  {
    number: 5,
    name: "Squirder",
    type: POKEMOON_TYPES.FIRE,
    set: CARDS_SETS[2114],
    description: "Favorite start Pokemoon of the nicotine addicted trainer.",
    artist: ARTISTS.Armilo,
  },
  {
    number: 6,
    name: "Chartortle",
    type: POKEMOON_TYPES.FIRE,
    set: CARDS_SETS[2114],
    description:
      "Chartortles are known to reheat banana and anchovy pizza with the flame from their firey tails.",
    artist: ARTISTS.Armilo,
  },
  {
    number: 7,
    name: "Blastard",
    type: POKEMOON_TYPES.FIRE,
    set: CARDS_SETS[2114],
    description: "Need a light?",
    artist: ARTISTS.Armilo,
  },
  {
    number: 8,
    name: "Blastard",
    type: POKEMOON_TYPES.FIRE,
    set: CARDS_SETS[2114],
    description: "All Gas, Some brakes.",
    artist: ARTISTS.LilyPonto,
  },
  {
    number: 9,
    name: "Kadalax",
    type: POKEMOON_TYPES.PSYCHIC,
    set: CARDS_SETS[2114],
    description:
      "Contrary to popular belief, it's not alway pleasant getting big spooned.",
    artist: ARTISTS.Ilya,
  },
  {
    number: 10,
    name: "Kadalax Slim",
    type: POKEMOON_TYPES.PSYCHIC,
    set: CARDS_SETS[2114],
    description:
      "Some Kadalax, having conquered their material vices, are able to sustain themselves off air and thought alone.",
    artist: ARTISTS.Ilya,
  },
  {
    number: 11,
    name: "Zapduck",
    type: POKEMOON_TYPES.LIGHTNING,
    set: CARDS_SETS[2114],
    description: "Strike one, you're out.",
    artist: ARTISTS.Morlux,
  },
  {
    number: 12,
    name: "Golden Koban",
    type: POKEMOON_TYPES.ITEM,
    set: CARDS_SETS[2114],
    description: "",
    artist: ARTISTS.LilyPonto,
  },
  {
    number: 13,
    name: "Golden Koban",
    type: POKEMOON_TYPES.ITEM,
    set: CARDS_SETS[2114],
    description: "",
    artist: ARTISTS.LilyPonto,
  },
  {
    number: 14,
    name: "Change Teams",
    type: POKEMOON_TYPES.SUPPORTER,
    set: CARDS_SETS[2114],
    description: "",
    artist: ARTISTS.NinjaGuy,
  },
  {
    number: 15,
    name: "Rash Scratchum",
    type: POKEMOON_TYPES.SUPPORTER,
    set: CARDS_SETS[2114],
    description: "",
    artist: ARTISTS.NinjaGuy,
  },
  {
    number: 16,
    name: "Baby Meownaut",
    type: POKEMOON_TYPES.PSYCHIC,
    set: CARDS_SETS[2114],
    description: "It's too adorable for words.",
    artist: ARTISTS.Mathijs,
  },
];

export const NFT_LIST: PokemoonNft[] = [
  { 
    tokenId: '100001',
    imageUrl: '001meownautC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 1),
    rarity: POKEMOON_RARITY.COMMON,
  },
  { 
    tokenId: '100002',
    imageUrl: '001meownautUC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 1),
    rarity: POKEMOON_RARITY.UNCOMMON,
  },
  { 
    tokenId: '100003',
    imageUrl: '001meownautR.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 1),
    rarity: POKEMOON_RARITY.RARE,
  },
  { 
    tokenId: '100004',
    imageUrl: '001meownautL.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 1),
    rarity: POKEMOON_RARITY.LEGENDARY,
  },
  { 
    tokenId: '100005',
    imageUrl: '002pikapuffC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 2),
    rarity: POKEMOON_RARITY.COMMON,
  },
  { 
    tokenId: '100006',
    imageUrl: '002pikapuffUC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 2),
    rarity: POKEMOON_RARITY.UNCOMMON,
  },
  { 
    tokenId: '100007',
    imageUrl: '002pikapuffR.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 2),
    rarity: POKEMOON_RARITY.RARE,
  },
  { 
    tokenId: '100008',
    imageUrl: '003pikapuffC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 3),
    rarity: POKEMOON_RARITY.COMMON,
  },
  { 
    tokenId: '100009',
    imageUrl: '003pikapuffUC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 3),
    rarity: POKEMOON_RARITY.UNCOMMON,
  },
  { 
    tokenId: '100010',
    imageUrl: '003pikapuffR.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 3),
    rarity: POKEMOON_RARITY.RARE,
  },
  { 
    tokenId: '100011',
    imageUrl: '003pikapuffL.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 3),
    rarity: POKEMOON_RARITY.LEGENDARY,
  },
  { 
    tokenId: '100012',
    imageUrl: '004rattishC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 4),
    rarity: POKEMOON_RARITY.COMMON,
  },
  { 
    tokenId: '100013',
    imageUrl: '004rattishUC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 4),
    rarity: POKEMOON_RARITY.UNCOMMON,
  },
  { 
    tokenId: '100014',
    imageUrl: '004rattishR.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 4),
    rarity: POKEMOON_RARITY.RARE,
  },
  { 
    tokenId: '100015',
    imageUrl: '005squirderC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 5),
    rarity: POKEMOON_RARITY.COMMON,
  },
  { 
    tokenId: '100016',
    imageUrl: '005squirderUC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 5),
    rarity: POKEMOON_RARITY.UNCOMMON,
  },
  { 
    tokenId: '100017',
    imageUrl: '005squirderR.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 5),
    rarity: POKEMOON_RARITY.RARE,
  },
  { 
    tokenId: '100018',
    imageUrl: '006chartortleC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 6),
    rarity: POKEMOON_RARITY.COMMON,
  },
  { 
    tokenId: '100019',
    imageUrl: '006chartortleUC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 6),
    rarity: POKEMOON_RARITY.UNCOMMON,
  },
  { 
    tokenId: '100020',
    imageUrl: '006chartortleR.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 6),
    rarity: POKEMOON_RARITY.RARE,
  },
  { 
    tokenId: '100021',
    imageUrl: '007blastardC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 7),
    rarity: POKEMOON_RARITY.COMMON,
  },
  { 
    tokenId: '100022',
    imageUrl: '007blastardUC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 7),
    rarity: POKEMOON_RARITY.UNCOMMON,
  },
  { 
    tokenId: '100023',
    imageUrl: '007blastardR.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 7),
    rarity: POKEMOON_RARITY.RARE,
  },
  { 
    tokenId: '100024',
    imageUrl: '008blastardC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 8),
    rarity: POKEMOON_RARITY.COMMON,
  },
  { 
    tokenId: '100025',
    imageUrl: '008blastardUC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 8),
    rarity: POKEMOON_RARITY.UNCOMMON,
  },
  { 
    tokenId: '100026',
    imageUrl: '008blastardR.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 8),
    rarity: POKEMOON_RARITY.RARE,
  },
  { 
    tokenId: '100027',
    imageUrl: '008blastardL.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 8),
    rarity: POKEMOON_RARITY.LEGENDARY,
  },
  { 
    tokenId: '100028',
    imageUrl: '009kadalaxC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 9),
    rarity: POKEMOON_RARITY.COMMON,
  },
  { 
    tokenId: '100029',
    imageUrl: '009kadalaxUC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 9),
    rarity: POKEMOON_RARITY.UNCOMMON,
  },
  { 
    tokenId: '100030',
    imageUrl: '009kadalaxR.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 9),
    rarity: POKEMOON_RARITY.RARE,
  },
  { 
    tokenId: '100031',
    imageUrl: '010kadalaxslimC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 10),
    rarity: POKEMOON_RARITY.COMMON,
  },
  { 
    tokenId: '100032',
    imageUrl: '010kadalaxslimUC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 10),
    rarity: POKEMOON_RARITY.UNCOMMON,
  },
  { 
    tokenId: '100033',
    imageUrl: '010kadalaxslimR.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 10),
    rarity: POKEMOON_RARITY.RARE,
  },
  { 
    tokenId: '100034',
    imageUrl: '011zapduckC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 11),
    rarity: POKEMOON_RARITY.COMMON,
  },
  { 
    tokenId: '100035',
    imageUrl: '011zapduckUC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 11),
    rarity: POKEMOON_RARITY.UNCOMMON,
  },
  { 
    tokenId: '100036',
    imageUrl: '011zapduckR.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 11),
    rarity: POKEMOON_RARITY.RARE,
  },
  { 
    tokenId: '100037',
    imageUrl: '011zapduckL.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 11),
    rarity: POKEMOON_RARITY.LEGENDARY,
  },
  { 
    tokenId: '100038',
    imageUrl: '012goldenkobanC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 12),
    rarity: POKEMOON_RARITY.COMMON,
  },
  { 
    tokenId: '100039',
    imageUrl: '012goldenkobanUC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 12),
    rarity: POKEMOON_RARITY.UNCOMMON,
  },
  { 
    tokenId: '100040',
    imageUrl: '012goldenkobanR.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 12),
    rarity: POKEMOON_RARITY.RARE,
  },
  { 
    tokenId: '100041',
    imageUrl: '013goldenkobanC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 13),
    rarity: POKEMOON_RARITY.COMMON,
  },
  { 
    tokenId: '100042',
    imageUrl: '013goldenkobanUC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 13),
    rarity: POKEMOON_RARITY.UNCOMMON,
  },
  { 
    tokenId: '100043',
    imageUrl: '013goldenkobanR.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 13),
    rarity: POKEMOON_RARITY.RARE,
  },
  { 
    tokenId: '100044',
    imageUrl: '014changeteamsC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 14),
    rarity: POKEMOON_RARITY.COMMON,
  },
  { 
    tokenId: '100045',
    imageUrl: '014changeteamsUC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 14),
    rarity: POKEMOON_RARITY.COMMON,
  },
  { 
    tokenId: '100046',
    imageUrl: '014changeteamsR.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 14),
    rarity: POKEMOON_RARITY.RARE,
  },
  { 
    tokenId: '100047',
    imageUrl: '014changeteamsL.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 14),
    rarity: POKEMOON_RARITY.LEGENDARY,
  },
  { 
    tokenId: '100048',
    imageUrl: '015rashscratchumC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 15),
    rarity: POKEMOON_RARITY.COMMON,
  },
  { 
    tokenId: '100049',
    imageUrl: '015rashscratchumUC.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 15),
    rarity: POKEMOON_RARITY.UNCOMMON,
  },
  { 
    tokenId: '100050',
    imageUrl: '015rashscratchumR.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 15),
    rarity: POKEMOON_RARITY.RARE,
  },
  { 
    tokenId: '100051',
    imageUrl: '015rashscratchumL.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 15),
    rarity: POKEMOON_RARITY.LEGENDARY,
  },
  { 
    tokenId: '100052',
    imageUrl: '016babymeownautML.png',
    card: BLAST_OFF_CARD_INFO.find((card) => card.number === 16),
    rarity: POKEMOON_RARITY.MOONLIKE,
  },
];
