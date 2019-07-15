require('../src/data.js');

const dataSTEAM = [
      {
        "gid": "3316234163932872071",
        "title": "Operation Canteen Crasher!",
        "url": "https://steamstore-a.akamaihd.net/news/externalpost/tf2_blog/3316234163932872071",
        "img": "https://steamcdn-a.akamaihd.net/steam/news/46099/canteen_crasher_event.jpg?t=1496190709",
        "is_external_url": true,
        "author": "",
        "contents": "<a href=\"https://steamcommunity.com/groups/potatomvmservers#announcements/detail/2533733726690659777\"> </a> <a href=\"https://steamcommunity.com/groups/potatomvmservers#announcements/detail/2533733726690659777\" target=\"_blank\">Operation Canteen Crasher</a> is a new community Mann vs. Machine event brought you by the same group that hosted <a href=\"https://steamcommunity.com/groups/potatomvmservers#announcements/detail/1663388904536296299\" target=\"_blank\">Operation Titanium Tank</a>! This community-created event features 28 maps with 50 missions and new shiny medals! Complete the campaign and take home up to 5 in-game Canteen Crasher participan...",
        "feedlabel": "TF2 Blog",
        "date": 1542738000,
        "feedname": "tf2_blog",
        "feed_type": 0,
        "appid": 440
      },
      {
        "gid": "2403127338429434053",
        "title": "Team Fortress 2008 throwback mod Steam page removed (Updated)",
        "url": "https://steamstore-a.akamaihd.net/news/externalpost/pcgamer/2403127338429434053",
        "img": "https://cdn.mos.cms.futurecdn.net/g248g8rByPSLNRiguYiWrV-650-80.jpg",
        "is_external_url": true,
        "author": "",
        "contents": "<strong>Update: </strong>The Steam page for XYK&apos;s Team Fortress 2008 mod has been pulled. As reported by <a href=\"https://www.eurogamer.net/articles/2018-10-25-team-fortress-2008-mod-transports-tf2-back-in-time-and-its-coming-to-steam\" target=\"_blank\">Eurogamer</a>, a <a href=\"https://twitter.com/folyqaa/status/1055710419413807105\" target=\"_blank\">screenshot from the project&apos;s Discord</a> (also now shuttered) suggests Valve could not be convinced at this stage that the TF-2008 team has created a mod for the original game, and is &quot;no...",
        "feedlabel": "PC Gamer",
        "date": 1540482175,
        "feedname": "pcgamer",
        "feed_type": 0,
        "appid": 440
      },
      {
        "gid": "2403127338428683883",
        "title": "Team Fortress 2 mod reverts the game to 2008 - and it's coming to Steam",
        "url": "https://steamstore-a.akamaihd.net/news/externalpost/eurogamer/2403127338428683883",
        "img": "http://media.steampowered.com/apps/tf2/blog/images/blog_chars_base3.jpg",
        "is_external_url": true,
        "author": "",
        "contents": "<strong>UPDATE 26/10/18:</strong> All good things must come to an end, but it seems TF2008's end came particularly quickly, as the mod's newly-approved Steam page has now been removed. According to an email screenshot shared on the mod's Discord server, it appears Valve has U-turned on its decision to launch the mod...",
        "feedlabel": "Eurogamer",
        "date": 1540464693,
        "feedname": "eurogamer",
        "feed_type": 0,
        "appid": 440
      },
      {
        "gid": "2403126706534048982",
        "title": "All of Halloween is happening in TF2 s Scream Fortress X",
        "url": "https://steamstore-a.akamaihd.net/news/externalpost/rps/2403126706534048982",
        "img": "https://spuf.org/wp-content/uploads/2018/10/screamfortress2018.jpg",
        "is_external_url": true,
        "author": "Matt Cox",
        "contents": "The thing about special Halloween game modes is that they&#8217;re fun for a round or two, then the novelty wears off. The thing about <a href=\"https://www.rockpapershotgun.com/game/team-fortress-2/\">Team Fortress 2</a>&#8216;s Halloween mode is that there are 18 of them. Ok, so only 5 of those are new &#8211; but you can also play the 13 previous Halloween events, w...",
        "feedlabel": "Rock, Paper, Shotgun",
        "date": 1540295862,
        "feedname": "rps",
        "feed_type": 0,
        "appid": 440
      }
    ];

//tests para función de filtrado
  describe('filterData()', () => {
    it('Debería ser una función', () => {
      expect(typeof filterData).toBe('function');
    });

    it('Debería retornar un arreglo de objetos', () => {
      expect(window.filterData([]) instanceof Array).toBe(true);
    });

    it('Debería retornar un arreglo de objetos con un lenght = 4', () => {
      expect((window.filterData(dataSTEAM,'game')).length).toEqual(dataSTEAM.length);
    });

    it('Debería retornar un arreglo con el objeto que tiene Matt como autor', () => {
      expect(window.filterData(dataSTEAM,'matt')).toEqual([dataSTEAM[3]]);
      expect(window.filterData(dataSTEAM,'mATt')).toEqual([dataSTEAM[3]]);
    });
  });

  //tests para función de ordenado
  describe('sortData()', () => {
    it('Debería ser una función', () => {
      expect(typeof sortData).toBe('function');
    });

    it('Debería retornar un arreglo de objetos', () => {
      expect(window.sortData(dataSTEAM,'least-recent') instanceof Array).toBe(true);
    });

    it('Debería retornar un arreglo de objetos con un lenght = 4', () => {
      expect((window.sortData(dataSTEAM,'most-recent')).length).toEqual(dataSTEAM.length);
    });
/*
    it('Debería retornar un arreglo con el objeto dataSTEAM[3] en el index 0', () => {
      expect([window.sortData(dataSTEAM,'a-z')[0]]).toEqual([dataSTEAM[3]]);
    });

    it('Debería retornar un arreglo con el objeto dataSTEAM[3] en el index 0', () => {
      expect([window.sortData(dataSTEAM,'z-a')[0]]).toEqual([dataSTEAM[1]]);
    });*/

    it('Debería retornar el mensaje de alerta: "Hubo una falla. Por favor, intenta de nuevo."', () => {
      expect(window.sortData(dataSTEAM,'song')).toEqual(alert('Hubo una falla. Por favor, intenta de nuevo.'));
    });
  });

  //tests para función de calculo agregado
  describe('computeStats()', () => {
    it('Debería ser una función', () => {
      expect(typeof computeStats).toBe('function');
    });

    it('Debería retornar un porcentaje igual al 100%', () => {
      expect(window.computeStats(dataSTEAM,dataSTEAM)).toEqual(100);
    });
  });