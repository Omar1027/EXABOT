module.exports = {
    name: 'تجربة',
    aliases: ['جرب', 'مثال'],
    category: 'الألـعـاب',
    description: 'جرب البوت',
    // expectedArgs: '',
    // minArgs: 0,
    // maxArgs: 0,
    syntaxError: '',
    permissions: [],
    // cooldown: '',
    // globalCooldown: '',
    hidden: false,
    ownerOnly: false,
    testOnly: false,
    guildOnly: true,
    slash: 'both',
    init: (client, instance) => {},
    callback: async({
        guild,
        member,
        user,
        message,
        channel,
        args,
        text,
        client,
        prefix,
        instance,
        interaction,
    }) => {
        const responses = [
            'جربت',
            'طيب',
            '<:coolEXA:849074407402242068>',
            'مش شغال',
            'إش تبغى',
            'حاول مجددا مرة أخرى',
            'معلش بس مش هارد عليك',
            'عايز ايه يا عم انت',
            'https://tenor.com/view/a7a-gif-8084883',
            'gg',
            'ايه يسطا',
            '🙄',
            '<:smoke:730120917706866728>',
            'توكل',
            '<:0_0:742770991448719410>',
            'هوا انت كل شوية ترفع ضغطي',
            '||جرب تاني ممكن يطلع لك توكن البوت (:||',
            'Bot_Token=||<a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777><a:36:802350897706827777>||',
            '<a:05:743321076976582757>',
            'خلصت افكاري للردود',
            'يعمل!',
            'https://discord.gg/e4ewVXcKCs',
            'https://discord.gg/ZPpwb3GRyG',
            'https://discord.gg/aEkKZQfZuk',
            'https://discord.gg/n9AQZ6qjNc',
            'https://tenor.com/view/jonah-hill-annoyed-gif-11134341',
            '**إذا تريد تضيف رد خاص بيك على الأمر ده كلم الأونر**\n** https://discord.gg/n9AQZ6qjNc <a:naar:885304543502536714>**',
            '<a:35:802350368847560725>',
            'https://tenor.com/view/al-sisi-egyptian-president-best-quotes-i-have-nothing-gif-12273931',
            'https://tenor.com/view/%D8%A7%D9%86%D8%AA-%D8%A8%D8%AA%D9%82%D9%88%D9%84-%D8%A7%D9%8A%D9%87-gif-22297937',
            'انا باتقطع من جوايا',
            'https://youtu.be/qo-NaxHRnQ8',
            '_ _',
            '**`_ _` => _ _**',
            'ㅤ ㅤㅤ ㅤ            ',
            'ㅤㅤㅤㅤ',
            'https://media.discordapp.net/attachments/719898370407399426/750467733015232546/giphy.gif',
            'https://media.discordapp.net/attachments/744125553421844480/854557438412587008/tenor.gif',
            'إتق الله',
            'https://tenor.com/view/%D8%A7%D9%88%D8%A8%D8%A7%D9%85%D8%A7-%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A-dancing-billiards-gif-14648304',
            'https://media1.tenor.com/images/7873ef498d20025411241cf2fc0addca/tenor.gif?itemid=19977297',
            'https://cdn.discordapp.com/attachments/728240513441988618/905883237056933968/video0_8_1.mp4',
            'https://tenor.com/view/%D9%85%D8%B1%D8%B3%D9%8A-%D8%A7%D9%84%D8%B2%D9%86%D8%A7%D8%AA%D9%8A-%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-%D8%A7%D9%84%D9%85%D8%B4%D8%A7%D8%BA%D8%A8%D9%8A%D9%86-moursi-gif-20679661',
            'https://cdn.discordapp.com/attachments/728240513441988618/905923867107790898/video0-23-1.mp4',
            'https://www.youtube.com/watch?v=rMeZ8nxcV3s',
            'https://www.youtube.com/watch?v=EvF91-jbl9g',
            'https://www.youtube.com/shorts/4nspx8go0ZM',
            'https://www.youtube.com/shorts/_V2fsNsHVuM',
            'https://www.youtube.com/watch?v=H-wprcAo4Bk',
            '.جرب',
            '.تجربة',
            '.مثال',
            'https://cdn.discordapp.com/attachments/902195455893573632/913114984257568848/31-faedah-fi-tdabbor-alquran.pdf',
            'https://cdn.discordapp.com/attachments/902195455893573632/913114984546992178/36-faedah-fi-a7kam-neka7.pdf',
            'https://cdn.discordapp.com/attachments/902195455893573632/913115189476483132/40-advice-for-house.pdf',
            'https://cdn.discordapp.com/attachments/902195455893573632/913115190013337640/41-faedah-fi-a7kam-al-sheta2.pdf',
            'https://cdn.discordapp.com/attachments/902195455893573632/913115190344679454/50-faedah-fi-a7kam-t3am-shrab.pdf',
            'https://cdn.discordapp.com/attachments/902195455893573632/913115260775456788/how-to-read-book.pdf',
            'https://cdn.discordapp.com/attachments/902195455893573632/913115261186490408/otrok-athran.pdf',
            'https://cdn.discordapp.com/attachments/902195455893573632/913115261979209738/150d8c66c0374189.pdf',
            'https://goo.gl/dQ2vrX',
            'https://rkns.link/kd589',
            '',
        ];
        const min = 0;
        const max = responses.length;
        const random = Math.floor(Math.random() * (+max - +min) + +min);
        return {
            custom: true,
            content: responses[random].toString(),
            allowedMentions: { repliedUser: false }
        };
    },
}