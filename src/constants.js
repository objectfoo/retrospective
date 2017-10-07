export const LAYOUT_ENTRY = 'LAYOUT_ENTRY';
export const LAYOUT_PRINTABLE = 'LAYOUT_PRINTABLE';

export const DEFAULT_STATE = {
  editing: null,
  layout: LAYOUT_ENTRY,
  good: {
    byId: {
      one: {id: 'one', text: 'good item one'},
      two: {id: 'two', text: 'good item two'}
    },
    allIds: ['one', 'two']
  },
  bad: {
    byId: {
      one: {id: 'one', text: 'bad item one'},
      two: {id: 'two', text: 'bad item two'}
    },
    allIds: ['one', 'two']
  },
  next: {
    byId: {
      one: {id: 'one', text: 'next item one'},
      two: {id: 'two', text: 'next item two'}
    },
    allIds: ['one', 'two']
  }
};
