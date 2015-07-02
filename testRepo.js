if (Meteor.isClient) {

  Template.index.events({
    'change input[type=file]': function(event, template) {
      FS.Utility.eachFile(event, function(file) {
        var fsFile = new FS.File(file);
        console.log("Inserting FS file", fsFile);
        Images.insert(fsFile, function(err, fileObj) {
          if (err) {
            console.error(err);
          }
          console.log("Inserted file", fileObj);
        });
      });
    }
  });

  Template.index.helpers({
    images: function() {
      return Images.find();
    }
  });

  Meteor.subscribe('pictures');
}


if (Meteor.isServer) {

  Meteor.publish("pictures", function() {
    return Images.find();
  });

  Images.allow({
    insert: function(userId, doc) {
      return true;
    },
    download: function(userId, fileObj) {
      return true;
    },
    update: function(userId, doc, fields, modifier) {
      return true;
    },
    remove: function(userId, doc) {
      return true;
    }
  });
}
