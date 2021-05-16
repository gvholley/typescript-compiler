let logged;

function sendAnalytics(data: string) {
  console.log(data);
  logged = true;
  logged = ''
}

sendAnalytics('The data');
