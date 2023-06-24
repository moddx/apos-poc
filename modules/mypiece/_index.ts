import { doStuffTask } from "./tasks/do-stuff.task";

module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'My Piece Type',
    pluralLabel: 'My Pieces',
    alias: 'mypiece',
  },
  fields: {
    add: {
      continent: {
        label: 'Continent',
        type: 'string',
        required: true,
      },
      country: {
        label: 'Country of origin',
        type: 'string',
        required: true,
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: ['title', 'continent', 'country']
      }
    },
  },
  handlers(self) {
    return {
      beforeInsert: {
        async setTitle(req, piece) {
          piece.title = `${piece.country}, ${piece.continent}`;
          piece.slug = `${piece.country}${piece.continent}`.replace(' ', '_').toLowerCase();
        }
      }
    }
  },
  tasks(self, options) {
    return {
      doStuff: {
        usage: 'Does things',
        async task(argv) {
          await doStuffTask(self, argv);
        }
      }
    }
  }
};
