import {v4} from 'uuid'

export const LAYOUT_ENTRY = 'LAYOUT_ENTRY'
export const LAYOUT_PRINTABLE = 'LAYOUT_PRINTABLE'

const good = [
  {id: v4(), text: 'good item one'},
  {id: v4(), text: 'good item two'}
];

const bad = [
  {id: v4(), vote: 0, text: 'bad item one bad item one bad item one bad item one bad item one bad item one bad item one bad item one bad item one bad item one bad item one bad item one bad item one bad item one bad item one bad item one bad item one bad item one bad item one bad item one bad item one '},
  {id: v4(), vote: 0, text: 'bad item two'}
];

const next = [
  {id: v4(), text: 'next item one'},
  {id: v4(), text: 'next item two'}
];

const makeSectionStore = items => items.reduce((acc, i) => {
  acc[i.id] = {...i};
  return acc;
}, {});

export const DEFAULT_STATE = {
  layout: LAYOUT_ENTRY,
  editing: null,
  good: {
    byId: makeSectionStore(good),
    allIds: good.map(({id}) => id)
  },
  bad: {
    byId: makeSectionStore(bad),
    allIds: bad.map(({id}) => id)
  },
  next: {
    byId: makeSectionStore(next),
    allIds: next.map(({id}) => id)
  }
}
