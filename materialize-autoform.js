// meteor add aldeed:simple-schema aldeed:autoform materialize:materialize gildaspk:autoform-materialize

Meteor.isClient && AutoForm.setDefaultTemplate('materialize');

Schema = {};

Schema.test = new SimpleSchema({

    size1: {
        type: Number,
        label: 'Size-1',
        allowedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },

    size2: {
        type: Number,
        label: 'Size-2',
        allowedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        autoform: {
            firstOption: 'Choose Size-2',
            options: 'allowed',
        }
    },

    field1: {
        type: String,
        label: 'Field-1',
    },

    field2: {
        type: String,
        label: 'Field-2',
    },
});
