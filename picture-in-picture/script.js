const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// Prompt user to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      videoElement.srcObject = mediaStream;
      videoElement.onloadedmetadata = () => {
       videoElement.play();
      } 
  } catch (error) {
      // Catch error here
      console.log('whoops,error here:', error);
  }
}

button.addEventListener('click', async () => {
  // Disable button on click 
  button.disabled = true;
  // Start Picture In Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});
// On Load
selectMediaStream();