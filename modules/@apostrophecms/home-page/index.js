module.exports = {
  options: {
    label: 'Home Page'
  },
  fields: {
    add: {
      subtitle: {
        label: 'Subtitle',
        type: 'string',
        required: false,
      },
      main: {
        type: 'area',
        options: {
          widgets: {
	    '@apostrophecms/image': {},
	  }	
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'subtitle',
          'main'
        ]
      }
    }
  }
};
