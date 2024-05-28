document.getElementById('generate-url').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    if (tab.url.includes('archive.org/details/')) {
      const identifier = tab.url.split('/details/')[1].split('/')[0];
      const downloadUrl = `https://archive.org/services/loans/loan/?action=media_url&identifier=${identifier}&format=pdf&redirect=1`;
  
      const downloadUrlElement = document.getElementById('download-url');
      if (downloadUrlElement) {
        downloadUrlElement.innerText = downloadUrl;
      }
  
      chrome.runtime.sendMessage({ action: "download", url: downloadUrl, filename: `${identifier}.acsm` });
    } else {
      alert('This is not a valid archive.org book page.');
    }
  });
  