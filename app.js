function listContents(storagename) {
	   
			//Clear up the list first
			$('#results').html("");
		    var files = navigator.getDeviceStorage(storagename);

			var cursor = files.enumerate();

			cursor.onsuccess = function () {
			  //alert("Got something");
			  var file = this.result;
			  if (file != null) {
  			   var imageElement = $('<img height="100" width="75">');
			   imageElement.attr('src', window.URL.createObjectURL(file));
			    $("<p>" + file.name + "," + file.lastModifiedDate + "," + file.type + "," + file.size  + "</p>").appendTo('#results');
				imageElement.appendTo("#results");
			    this.done = false;
			  }
			  else {
			    this.done = true;
			  }

			  if (!this.done) {
				this.continue();
			  }
			}
}
$(document).ready(function(){

	   $("#browseSDCard").click(function(){
	      listContents('sdcard');
		});
	   $("#browseVideos").click(function(){
	      listContents('videos');
		});
	   $("#browseMusic").click(function(){
		  listContents('music');
		});
	   $("#browsePictures").click(function(){
	      listContents('pictures');
		});
	   
});