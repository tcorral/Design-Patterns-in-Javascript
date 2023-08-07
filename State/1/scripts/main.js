import Download from './Download';

let oDownload = new Download();

$("#download_button").click(function() {
  oDownload.download();
});
$("#pause_button").click(function() {
  oDownload.pause();
});
$("#resume_button").click(function() {
  oDownload.download();
});
