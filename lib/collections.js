imageStore = new FS.Store.FileSystem("images");

Images = new FS.Collection("images", {
  stores: [imageStore],
  filter: {
    allow: {
      extensions: ["png", "jpg", "jpeg"]
    }
  }
});

