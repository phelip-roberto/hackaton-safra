export const signIn = (body) => {
    return fetch({
      method: 'POST',
      url: `https://idcs-902a944ff6854c5fbe94750e48d66be5.identity.oraclecloud.com/oauth2/v1/token`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': convertBase64("f9d3cd9600874ac2803d03ca709b78eb", "1a2075e3-b15e-4324-902c-0f12f8f08082"),
        'Cache-control': 'no-cache'
      },
    });
};

function convertBase64(param, param2)
{
    var str = param + ':' + param2;
  
    var teste = "Basic " + btoa(str);
    return teste;
}