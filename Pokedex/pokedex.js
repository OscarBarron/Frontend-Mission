function fetchPokemon ()
{
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url ='https://pokeapi.co/api/v2/pokemon/'+pokeInput;
    fetch(url).then((res) =>{
        if(res.status != "200")
        {
            console.log(res);
            PokeImage("./src/images/pikachillon.jpg");
        }
        else{
            return res.json();
        }  
    }).then((data)=>{
        let pokeImg = data.sprites.front_default;
        let pokeNombre = data.name;
        let pokenumero = data.id;
        let pokeTipo = data.types.map((typ) => typ.type.name);
        let pokeStatshp = data.stats[0].stat.name;
        let pokeStatshpnum = data.stats[0].base_stat;
        let pokeStatsAtack = data.stats[1].stat.name;
        let pokeStatsAtacknum = data.stats[1].base_stat;
        let pokeStatsDefense = data.stats[2].stat.name;
        let pokeStatsDefensenum = data.stats[2].base_stat;
        let pokeStatsSP = data.stats[3].stat.name;
        let pokeStatsSPnum = data.stats[3].base_stat;
        let pokeStatsSpeed = data.stats[4].stat.name;
        let pokeStatsSpeednum = data.stats[4].base_stat;
        let PokeMoves = data.moves.map((typ)=> typ.move.name);
        PokeImage(pokeImg);
        Nombre(pokenumero,pokeNombre);
        Tipo(pokeTipo);
        Estadisticas(pokeStatshp,pokeStatshpnum,"pokeStatshp");
        Estadisticas(pokeStatsAtack,pokeStatsAtacknum,"pokeStatsAtack");
        Estadisticas(pokeStatsDefense,pokeStatsDefensenum,"pokeStatsDefense");
        Estadisticas(pokeStatsSP,pokeStatsSPnum,"pokeStatsSP");
        Estadisticas(pokeStatsSpeed,pokeStatsSpeednum,"pokeStatsSpeed");
        Movimientos(PokeMoves);
    })
}

const PokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
const Nombre = (numero, name) =>{
    const pokeName = document.getElementById("pokeNombre");
    pokeNombre.textContent = ("#"+numero + " "+ name);
}
const Tipo = (type) =>{
    const pokeTipo = document.getElementById("pokeTipo");
    pokeTipo.textContent = ("Tipo: "+type);

}
const Estadisticas = (statsname, statsnum, id) =>{
    const pokeStats = document.getElementById(id);
    pokeStats.textContent = (statsname + ".........."+ statsnum);

}
const Movimientos = (moves) => {
    moves.forEach(element => {
        document.getElementById("pokeMoves").innerHTML += "<li>" + element + "</li>";
    });
}
//PokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png")
