export default class DataService{
    async getVisiteur(unLogin, unMdp){
    var params = new URLSearchParams({ login: unLogin, mdp: unMdp });

    var response = await fetch('http://172.16.61.103/restGSB/connexion?' + params);

    var items = await response.json();
    console.log("json", items);
    return items;
}
}