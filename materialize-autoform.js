// meteor add aldeed:simple-schema aldeed:autoform materialize:materialize gildaspk:autoform-materialize

Meteor.isClient && AutoForm.setDefaultTemplate('materialize');

Schema = {};

Schema.test = new SimpleSchema({

    size: {
        type: Number,
        label: 'Size',
        allowedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
