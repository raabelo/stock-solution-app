const backend = () => {
    let link;

    //ip local
    link = "https://stocksolutionapp.azurewebsites.net/api"
    // link = "http://192.168.0.165:3001"
    // link = "http://192.168.15.11:3001"

    //production
    // link = "https://prod.com";

    return link;
};

export default backend();