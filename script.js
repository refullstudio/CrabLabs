const characters = [

"https://cdn.discordapp.com/attachments/1447905893571366915/1531302884145365054/BIGHEAD_R_1.png?ex=6a68b871&is=6a6766f1&hm=b4bb1393b516fe994a729b8ae12c0d5edc60b0f34d8657b9f93f11eaa67e048e&",

"https://cdn.discordapp.com/attachments/1447905893571366915/1531302884568731868/BIGHEAD_R_2.png?ex=6a68b871&is=6a6766f1&hm=6da443862d84d293a38decf4625dbc25c0f449b90cdd391bff8461294d541372&",

"https://cdn.discordapp.com/attachments/1447905893571366915/1531302885869097060/BIGHEAD_R_3.png?ex=6a68b872&is=6a6766f2&hm=ba9800b576c0e46a62a9c6d965f419755b8b296bfd84d4fc0ca56c924b16b962&",

"https://cdn.discordapp.com/attachments/1447905893571366915/1531302886615810338/BIGHEAD_R_4.png?ex=6a68b872&is=6a6766f2&hm=7e3782ab7018e6a8c882578db24c657e3ac6c31367e24cb17c674872c22f8796&",

"https://cdn.discordapp.com/attachments/1447905893571366915/1531302887203016806/BIGHEAD_R_5.png?ex=6a68b872&is=6a6766f2&hm=d68b62961802c3dcfd69222c2ebb7f1074f8da8fac0b2dcec88e116312bd70eb&",

"https://cdn.discordapp.com/attachments/1447905893571366915/1531302887794282536/BIGHEAD_R_6.png?ex=6a68b872&is=6a6766f2&hm=7d8d7d1610ea4be55aace018538f06b9d1202caeb8539078ccd7206e4e3636c8&",

"https://cdn.discordapp.com/attachments/1447905893571366915/1531302930987225168/BIGHEAD_R_7.png?ex=6a68b87c&is=6a6766fc&hm=4c9de2b0d7292ab9f4650e50faffa17b4f33ef9f6c8c76eef8416c8506fd0fa7&",

"https://cdn.discordapp.com/attachments/1447905893571366915/1531302931691995327/BIGHEAD_R_8.png?ex=6a68b87d&is=6a6766fd&hm=84dcf825439a9094a07e0e5cb4f16cacdbbbd31254e73aa00bdd1e6e3c66b87c&",

"https://cdn.discordapp.com/attachments/1447905893571366915/1531302932128075958/BIGHEAD_R_9.png?ex=6a68b87d&is=6a6766fd&hm=331ad6a1e6fe081b58a4200634714ba371ab1ff9672b03d08e73bfe12534f84e&",

"https://cdn.discordapp.com/attachments/1447905893571366915/1531302933071663206/BIGHEAD_R_10.png?ex=6a68b87d&is=6a6766fd&hm=24251d094e0dcddefebf0ccc75a5e06c01d5aed621cef8cd58e179cebd17bab8&",

"https://cdn.discordapp.com/attachments/1447905893571366915/1531302936108470392/BIGHEAD_R_11.png?ex=6a68b87e&is=6a6766fe&hm=ddf2c0ecbd90d9eeb2d9dcfc34bf42c0dc4459a0dbac1ee0fa23e3ba2ca6e63b&",

"https://cdn.discordapp.com/attachments/1447905893571366915/1531302936964239541/BIGHEAD_R_12.png?ex=6a68b87e&is=6a6766fe&hm=4226cf008537798e79fb9bb7be515fdff26d41e3bb31c09ed61b769ccd3a4fd2&",

"https://cdn.discordapp.com/attachments/1447905893571366915/1531303014084640868/BIGHEAD_R_13.png?ex=6a68b890&is=6a676710&hm=e15241f8a67a469d200920d3f33ef7f4732d90091c310fd6debd27bd3461e19d&",

"https://cdn.discordapp.com/attachments/1447905893571366915/1531303014445355248/BIGHEAD_R_14.png?ex=6a68b890&is=6a676710&hm=b759886cacf0b30e7c59ce487313165d5b2128fa1045b3be21b9570ab82b2f87&",

"https://cdn.discordapp.com/attachments/1447905893571366915/1531303014764249168/BIGHEAD_R_15.png?ex=6a68b890&is=6a676710&hm=0d0ae91df8e9c5803998f422b19f4fe36a00315feca92cb4ccac31fa98f984e8&",

"https://cdn.discordapp.com/attachments/1447905893571366915/1531303015192199300/BIGHEAD_R_16.png?ex=6a68b891&is=6a676711&hm=32b35c593b0c3124b59601cbfcce7729273fda80692eee7accb6dd93dc702977&",

"https://cdn.discordapp.com/attachments/1447905893571366915/1531303015544389722/BIGHEAD_R_17.png?ex=6a68b891&is=6a676711&hm=4465d2e707b94cf8d4d5bfb97412150a3c8c189957f6b0fdfb61164ae3cce88d&",

"https://cdn.discordapp.com/attachments/1447905893571366915/1531303015900909818/BIGHEAD_R_18.png?ex=6a68b891&is=6a676711&hm=c7ac3d704e3e482f014848c21496f6f94745ea28515caad48da151d5619e1802&",

"https://cdn.discordapp.com/attachments/1447905893571366915/1531303035182256248/BIGHEAD_R.png?ex=6a68b895&is=6a676715&hm=eeae4eb70fb215455fb269a9d094b7aed0436eed8c39be3b14562dcedd340dcf&",

"https://cdn.discordapp.com/attachments/1447905893571366915/1531305837266735274/Untitled_image_3.png?ex=6a68bb31&is=6a6769b1&hm=abc661cbd24926161f95f5527c9781160d35f7f355e8ad9330d7bd5283055544&"

];


const container = document.getElementById("characters");


characters.forEach((image) => {

    container.innerHTML += `
        <img class="character" src="${image}">
    `;

});