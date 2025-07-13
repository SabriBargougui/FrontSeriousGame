'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "60d2c3654fdf9b9c1db0462aa60ca7b4",
".git/config": "b164bd01cc3f357335ee8b93575e31c6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "81887ffa400c03b3e0e7f988e3bb4355",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5128be8b426afdb2d87a8d9834580e33",
".git/logs/refs/heads/main": "87ff919687b4f0bf64446d43fe42cb24",
".git/logs/refs/remotes/origin/main": "ea9d300ab90130babaae396a0a4de0b2",
".git/objects/02/8bc7a4fe85e64711968c512cbd4a31f21f2aab": "1417964e837b7a84d263bef813ab061e",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/05/14d10e4a9515b064869f704a70e52188364fd1": "7f645d924bd1847dbe012ccbe0fa0355",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0c/2d1969c01b9e1324f7626e22cd5f3f6d6e0686": "3eb97f12e0145963623e369572b39c19",
".git/objects/0c/4a302d09559f631a08a70b9fc3474a3345f2f7": "737ce73f18fcd8e8ae6ed5443834ea7f",
".git/objects/0e/e17ace3d0211c24605b6f11bee8ff88a131eca": "3db0ed9d1f5d3eb06dbb33207a4ada72",
".git/objects/17/a150f09b644c0dcaf8c94ef3447c8dfb963fb6": "4f03177d7bafd00b04d54a79b30e4725",
".git/objects/1d/d118214f14a5f4d5e1fc06d8a536059048af7c": "3d792519c5883110b0653381177d24ac",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/4f6e9251a74033d35afa00cdb74ef28bc0dc28": "dfbfab3b0ee3f706b19ce6ffefd11cf5",
".git/objects/21/adaf59de2bfded9511a82ca7263758c169ec72": "aecb6d8cbee8cdbf1645afc2bec7f2ec",
".git/objects/24/e74385c7605842bc4b0bbde1c03f47df7874bf": "e9d2f96ebf13efbdf4808fa6b207abf1",
".git/objects/26/43facf5e1be9b21b51d54f2784ed2bf47d307b": "939e9869ea55022cc507cd983e2ff09a",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/27/dcec25f389c14c78cfc5460cd38714d05ec41e": "8b957c5db198887719474aacb7fbe949",
".git/objects/27/f791c8a1f3faceb8ad01a0aabae4c5e1c7dc04": "ed283f026d5eba5dc53d4ca7a4ce06bb",
".git/objects/29/b8679f991011098b4a1a08c1477c394461da1f": "c83fce78b66f18e48089bcdcf4d22bfb",
".git/objects/2b/4736436a70297e548f6b220f7f384d83479fc3": "b956cc3bdfd4ae701c60e4fa85c35237",
".git/objects/2b/eb75376baf85e06541fd989cd82ab6f5c197fd": "1d2374101cf3651a6fa4825915a1ade9",
".git/objects/2c/20a75ef631c1b46d03a2c6c94ca0714afbb79b": "38274a4a9dccaefab11b16ab86e3ea4b",
".git/objects/2c/ee828fcfb57cee4d80bae9972df36f110ef6a1": "0b0ea3a609c56a58d03c26621e5ca8aa",
".git/objects/2e/73ae73fa17ee49a221377c6097b87fb77c0e90": "628aebf79b0a65c0cb74ac7566d94a38",
".git/objects/33/5242f94541514fda4d4ff01682e9da48eb261c": "79b93884bdc42a6fb70a389163ef8fef",
".git/objects/35/6208aa43bfaef4caa980d1937ec1fcf94c5989": "61f025b4d273337e11feabae0ddce41b",
".git/objects/35/893f91a83ea3615edf6376044b100e71e87e14": "b40c9e6bd0114fa1c6e773b1d2700fd3",
".git/objects/35/b7a42c0db022959eba886df6ebee9415caa40c": "b466e319b4567e7b0d628fd63fdb709b",
".git/objects/35/ce14653ff7f3351078db80c57170f31ed497e2": "dd88a894bfa3330e9f25b1ec5cbc8124",
".git/objects/38/b098b963b45f84ca88bbed7379b41cfc78239a": "730827d03eba685a9d8afccb880bb64e",
".git/objects/3c/83fb6a56694c36cf381dfd104270e1dd6d4eb6": "cdda168435c0a1282f29696a0bac0f74",
".git/objects/3c/dc12cbcea9912e2e3b0a1acca1fa2a96015ee9": "d3348b0f2b3ba7b80dad044c71040c66",
".git/objects/3e/7b827e81371fee13dae830d0e26762588b2492": "43b7967df1bde23516c3ba3ba3635ef2",
".git/objects/41/93667f2c5138864e18fcbe6c238cdc91b45c38": "714b70276cbb5c500f73a04fadc1ac2a",
".git/objects/45/5aad9a7cedc5cd1203ed137336fef6bb3d1b79": "fcd6f9e4a35e7c7d87124cc29142a1a5",
".git/objects/48/d8b7944c8b7de0864265018e51f959f3e6fb7b": "9da3882989ba9a261447dedfa4a12464",
".git/objects/4a/4a564bd6e905ffb530f597a70e0e98d915356d": "f64c6dc44e6abd9a49817d7fd2138191",
".git/objects/4b/58d77a7977ba8482d6445f720be73a81ac3e86": "83b4b3e5801971635e44bdd409167e0f",
".git/objects/4b/b08aaf0aae329bce6ae01a214382d73557bde9": "a90dbfd4f9271e2267e08c2534514592",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4d/44ff6a8036501b505330599800ff7021bd6afe": "818cfca10ea221bd84fa7bd2b34f8dc3",
".git/objects/4f/fc6e41e876ad4dc413a7ae0375a9344d93e07e": "c7bf233eeb3764e3b4ae93bdc4b56d18",
".git/objects/50/e6d69ad365e7c8e5d899c1f4100d7b03541b28": "ea1d0267b16916fb87c32b9fc8dbd47c",
".git/objects/51/6e5aea66234b993b6ae0fa1b0cce7909e1f0a9": "81b91b3cead9593eaff5b4950c87d0c6",
".git/objects/53/4e6670c22e61be80d48c191b3db24770f83b7d": "af165590b4a433b0ad3e7972e42c1219",
".git/objects/53/dc8862b38d5dedce3f2d0fe767256a923ad735": "f1937bf6454af3c82aae37e9813b9dd2",
".git/objects/55/174248ea5332128920be287a36282830bf145a": "5dfd9bdddc904564ae05833a6a6e8cac",
".git/objects/55/81801fe50b13070819443dd428dfb4451630c4": "2901e8380275ec5e98d96374ff7f0cbe",
".git/objects/57/38cedb187756f90706351428b1b7bc6bcafc2c": "262af7061fac4c9e2c1ff6633cb6ec81",
".git/objects/58/a2a0d44daa18ecd8429c10c4936b30ae035059": "1ebe4d84f24b3506cf0e3e3d2136d1cb",
".git/objects/5b/96b96c98a0d2e6dc3603f554840105f82cbb1a": "e70f07406452f7f56af2c5c917a0e023",
".git/objects/5b/bf7476e0753f6ba52a3ef8a66a274b972a43fb": "f857b9c05bb889eccf0832cbd9ed84b8",
".git/objects/5c/5f835a1fca0a4042720b345734a031b40b54f8": "871cbf4fbc336cb02a142a137bcf0a0f",
".git/objects/5d/730552efe983b1c613764a6c503a721bed3dd3": "d1000056c54e45af2131948fd06d1227",
".git/objects/61/b3b9825cdb53f26c48dc18f4a2a052db45aaac": "2f40f1af247793866b9296f914eac936",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/66/85a3188a7d6b28b2d5765170cf4b66912d6a79": "3c20ff15661aa8959cd47e65dc8aeaa0",
".git/objects/67/6277cbb6ecbb9d7ecced5500c72bd53b4de16c": "22afd612a9d37fbde17e83a55860ac3e",
".git/objects/68/4c18a3c9fe26a4a9a4f900aa9871ce9c199bcd": "15bb4d5ce74bd44832b22d4216956b39",
".git/objects/6b/8b30436fd245d6558dc05c5c3ab62ddd0c25d8": "fb00e52d9ddf6ac17567fe1e8c65d6fb",
".git/objects/6c/6ee3dd352de8f37589835b1c872d7039bc1d9d": "70ac4ec17906e62cc74fbcac39c807fa",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/f03c8916ecb56e0b853179d0d648ec7a990bbf": "9b9529f484a230cc521ea96f0a717016",
".git/objects/6f/3b77db59548b79ca70c5c2d1ef6b20b51813fc": "4b1f373c086f810cfc907eee755046a7",
".git/objects/73/2672d5875f4065ca82b734982e7a993c666c40": "3c3c3d48b03de72dee151bbe60303ace",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/a408c1199145d910456f01147528e26e2c24cf": "866334e0cb283cb439daae7ade74dc05",
".git/objects/80/43e8cb150f6fdd624b874675061e10c5ec6ff1": "72e87182d50f1c64bae3115e6c98ac99",
".git/objects/80/d26c49b251a5312be6d05672109552aed772e7": "19281eac1ff83cce047c070f6ba19d2c",
".git/objects/81/79f54de8582d5d3981ce3dd023c5d9efad1852": "292715abf3a25b8ea26ad2d8350dd812",
".git/objects/84/7ae986f5da0eb9542b752a946fbd77e60f19f7": "a6d36250ba917670a653df1ded0a78b5",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/055e72e13f043b7cadf1c828e294934a7045a4": "4c8da8f1908855d2be5551a878badca0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8f/a82b393e878e268d4731a768af6f033c1442d8": "20ca346c18088c4a499831dccf83713c",
".git/objects/8f/e21529b1c16e3f75a991decff5a9c6beab204d": "1eddb6d2458ea24bee9015fee62d90c8",
".git/objects/91/1f0abd9e6484bef85fe64e74a252839da0f497": "bdb68cf02b10f20cb48e171ac1013ede",
".git/objects/96/a18d8fb13f012c3d9b1cc94c1dfc18c705e6ba": "637d9659d99f9896cbe69ec37de4fabf",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/99/fd2271d7a87d3f77fc69134ddcdf83e17028e9": "3003aef00cb0b33b08a8072f55575bdc",
".git/objects/9d/7444074e83c29d04d02e1df25b0d07cbeaf58a": "a1724c421d8a63d9930f9d526bbdbd1b",
".git/objects/9e/1cc739bc9284ef1df2559e8893a152a6b35b3e": "5e1bca4a3ffb252de78acd266823beb0",
".git/objects/a2/1683f04337b09ed2f5d98de0debc74d49a1782": "0858a7ce0eaa65349ba16c032be15126",
".git/objects/a5/0cedaa679871b2a4b7e74253f82664fd202b6d": "61c4a1bd9431d5c1513932a1f4e0c322",
".git/objects/a7/095fa477af2782d77d5ed74e371a59d5bff799": "0ef666ae0569e4b07367ccfee01fa0de",
".git/objects/aa/2526948dff2bc519bc5060988f1dceb9e9fac3": "7e6d84c8515a469e595040fb67750146",
".git/objects/af/1a5d0d048087d37b9d89eb69681d03431bcf98": "5cce8ee507e51ac8649d26088c964c2e",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/b3068c6722d7b2511fd772dcdf7b8f137fda9f": "f65c1741dd96e99ab875b5e1a2cbcf18",
".git/objects/b2/34f434bb3950ea15996856daa664df0cbbf36f": "7cb0d9f1eef8025d1f6fb9199046de13",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/98917f5308647658567f979620d14fc143140b": "eee966012d136872aeceb57983848a71",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/899a133c6ac63c8e3ade4775af51a8ae0bc903": "b30f0ba981a26b632e42ee9907eeb06a",
".git/objects/be/8cec67f09a9e334e6218857c3e17078c1a3a31": "e142874afa1b1e37f895b3358885b61a",
".git/objects/bf/8826b1c37375061b12fcd0984b23ad4d3e6803": "c8614801cd4e295370f6a92fcccefbf3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/337f3e37d87152e8bf586c4a347f94cb7994c7": "4c706d9fd802df1b4038273824433f7e",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/cb/3069176741617413231d1d09b174b15e03a112": "636f9dc44c86052fb24088a78b11ad6c",
".git/objects/d3/54f48ff81fa7dd1f149a6a1fe19d477502c4ba": "d51504615505e7d883ed794fca33254c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/0dfbb326434ff780de65374350aab960c2dcfb": "b16672cda4eb2f34c22afef6b054cb9d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/d7c57c0371644f3bc4cc277003a1372507fb28": "2b2a02b1f60e53c016f95a75a803b66a",
".git/objects/dc/7c0c305c65e7a40e500a203c7cbf6c4ab4a4b7": "2a5ee0165f6ee5fc86f5a6bd86bab501",
".git/objects/df/e639436f6722b9da96491316c50a946d471d0f": "dc9862b35d8b8634297703ed169b7357",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e4/44266d3c5be7fc507551e56265dff8fd7638bb": "aa2295892328de12cb70fc951fa74591",
".git/objects/e4/910d78294e033f9bdd2297ce234bdf70c5933c": "db3b5abe5c3eb8d30bc434439e433dcf",
".git/objects/e5/997b1e4fca1471b3c7dbdd5e4dd5ec55b6fd0b": "d678fa0c4749a4af7868fe8b122c4ccd",
".git/objects/ea/6f88ff304b35820019d15f6da88b8382830fd7": "fee8df2e8f33f4a688419b80f19799ca",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/00f33b9063f5bd2e44dcdb78fa37b027dd3acd": "ec16d027e377476af3c01b0b9a5ad2f7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/3cb742632b5c5300f5bb1172db3a71ae3fbe4c": "cf1e5e813f058ebdb70763f9bb8fa687",
".git/objects/f3/5783387034a8c6b424476af5b009a0e010b716": "5dc4e9fb988d192cc0ad322d03815346",
".git/objects/f4/461dee2915bae8b906446dc8c4f3d4654e1416": "ee4b07639c528056edb2793a716d0501",
".git/objects/f5/8090ca7599d2fdce60b32c651ee78225a74e15": "0d8963675387cc4b2e13535051cfe6dd",
".git/objects/f7/15f179ec27ba6ae0081a4dbe74dcc580985e11": "040ae6518204af39acb08d7c96192173",
".git/objects/f8/1255aad2ef0e9d6d388be70f7af72c7d6587ae": "e22ebadd0e60de869cd1dca452066d93",
".git/objects/fa/bc6dadd036f3fc98d0e89b8f9a120d2f0602c3": "8e9f982ec8753455679fa7620e1ca284",
".git/refs/heads/main": "871d391deeb71f001a5b66058dbfda3f",
".git/refs/remotes/origin/main": "871d391deeb71f001a5b66058dbfda3f",
"assets/AssetManifest.bin": "9148626df4128b2bee6eb6597837de1a",
"assets/AssetManifest.bin.json": "f738def4d4008dace8812ac2b3a61e12",
"assets/AssetManifest.json": "8185b63e8658031036d2b87f6efe6d76",
"assets/assets/configuration.json": "666642f350291f07b74fb4bf1f8d4d36",
"assets/assets/fonts/Kanit-Black.ttf": "85d1eb1c7446a7988773ce1c083eba17",
"assets/assets/fonts/Kanit-BlackItalic.ttf": "fd03a76584b3d0f3f66e4c3772d5a010",
"assets/assets/fonts/Kanit-Bold.ttf": "e397bc144284776cd0669e9342e5a531",
"assets/assets/fonts/Kanit-Medium.ttf": "da9eae892a8a3763f7fdbe859a4dd895",
"assets/assets/fonts/Kanit-Regular.ttf": "4e90956ae64683872e50efaffa7f354f",
"assets/assets/fonts/Kanit-SemiBold.ttf": "b116fde15528c69c1a0a698e82c32657",
"assets/assets/fonts/Kanit-Thin.ttf": "b944d853d744d70e4cdc1b2a97c12272",
"assets/assets/icons/butonrightpng.png": "4a23daad5bfd614b399210c69d432c79",
"assets/assets/icons/button.png": "8b5e7915663a23e63fc875654db9bebc",
"assets/assets/icons/Salle1.png": "d200afb09a9c753ad034cbc2985258ff",
"assets/assets/icons/Salle2.png": "727b67c0561a7a5dbea9e618b373d956",
"assets/assets/icons/Salle3.png": "de6fa12c82e4be3e2131b527bde9661c",
"assets/assets/icons/step1.png": "e83ed3831d4c5fad86a1ad3fd754e37c",
"assets/assets/icons/step2.png": "bef6997f1be89d516f071dfbd96030d1",
"assets/assets/icons/step2disabled.png": "16c422ba64eec5bb1a072950e797f834",
"assets/assets/icons/step3.png": "a2ed3e2bc1c20637d171b0879c255634",
"assets/assets/icons/step3disabled.png": "9d4d41d0e19c084337cdc01708e710fc",
"assets/assets/icons/step4.png": "8eab2a5d5d6081aef21f1bdb85f3819b",
"assets/assets/icons/step4disabled.png": "476449a7aa72baa3f8fc7aec93cb60c4",
"assets/assets/images/boul.png": "826dba0b6cc049fa00e93cc643687663",
"assets/assets/images/close.png": "4dd37ec68f0f82293ec775838d8c42ae",
"assets/assets/images/cong1.png": "2c903362c14e4ab9d1c578831756d08a",
"assets/assets/images/cong2.png": "26183cdc548c33a8be34b51f66b56ad7",
"assets/assets/images/congmain.png": "6ea16283155d7313d3f8de71c81d0038",
"assets/assets/images/container1.png": "bd9a25f405a0ff4fdb344ae5ca1686d9",
"assets/assets/images/container2.png": "dd1fb5976b5b685efbfddcee9c920d54",
"assets/assets/images/container3.png": "2fa669aca9b07f99b456aced0c9459ff",
"assets/assets/images/container4.png": "d3002ee61f5fc9f7523e16cf0b741c58",
"assets/assets/images/container5.png": "ddfa5dabd67d9716a78d3784d8d4296d",
"assets/assets/images/container6.png": "89aa23e192bd13b3f464a99801bed5bc",
"assets/assets/images/dd.png": "f320e6377a3cdead04cc0780d9090384",
"assets/assets/images/doc2.png": "388df8b795b186369a44ef8b68cc4527",
"assets/assets/images/doctor.png": "482c16700176fb81a1c0ccaae7f48749",
"assets/assets/images/false.png": "ff1539763d9da7325b41e261af790183",
"assets/assets/images/finalq1.png": "4c1fedc56bd58ff0746461ded9b67ea1",
"assets/assets/images/finalq2.png": "503bdafdf1dc7c4ebc7f0d58f0221163",
"assets/assets/images/finalq3.png": "26c41f2d2c750422f6b4682a1e388add",
"assets/assets/images/fois.png": "9fecd952805aae2932f1bbade7f9a29f",
"assets/assets/images/gradien.png": "eb85c155d4046edfa1f87180f8304465",
"assets/assets/images/home.jpg": "fabce19712bf926efa591645a7d03319",
"assets/assets/images/home.png": "e53151f74266c5949a5d8d2516f5163d",
"assets/assets/images/lame.png": "a50eb60d0588b71580fe901a27817b7a",
"assets/assets/images/land2.png": "92534380013f9781a11d88461715ac5b",
"assets/assets/images/landing.png": "8ffd2f8b29cb0786e4800155d49e2af4",
"assets/assets/images/logo.png": "f76e3d488a58a8f74495d15adf9b2632",
"assets/assets/images/main1.png": "6dd36e28e06f15e3897199d295d916a8",
"assets/assets/images/main2.png": "3368d784d39d093ca9b3fe62dd7ba2b5",
"assets/assets/images/main3.png": "c015436699f79e22666239d1616c1b92",
"assets/assets/images/main4.png": "f9253df046a8c44951c37d3bcec5a343",
"assets/assets/images/mainhidden1.png": "e5ed2454cd336d7ddadc389dd2ae299e",
"assets/assets/images/mainhidden2.png": "8b1378137fe6a62f1b17e31c93cbe376",
"assets/assets/images/mainhidden3.png": "ba7f886fd09a85f31fec5150fe9b37c5",
"assets/assets/images/mainhidden4.png": "0c76268c117f4e3c675f1be4cacc75ca",
"assets/assets/images/number1.png": "edb3d2f6521aed71c4af236e58011fca",
"assets/assets/images/number2.png": "d49e8c0d29b98eb5b00535407bb6b181",
"assets/assets/images/number3.png": "44e20f289e9c54a52a3ae05b026e45f6",
"assets/assets/images/number4.png": "fb290c03e7861918d59a03d739c523ee",
"assets/assets/images/pos1.png": "386634c6174b2d7791cf35c043e92482",
"assets/assets/images/pos2.png": "1f9ff44e6ed8fc9d8626f799824ee839",
"assets/assets/images/pos3.png": "26105cf07d10cb8d32edf475c3e41160",
"assets/assets/images/pos4.png": "3a901d38ab09f76f96c40920fd8ea742",
"assets/assets/images/pos5.png": "6e00da22eefa553f0911bbf02a0d63d6",
"assets/assets/images/q1.png": "0a109a2fd157efe32d4c67017269b816",
"assets/assets/images/q1big.png": "f913b9c7d774b24c2c77825c91966a83",
"assets/assets/images/q2.png": "fb3159379838ae41e78dcaec5a595662",
"assets/assets/images/q3.png": "fb3159379838ae41e78dcaec5a595662",
"assets/assets/images/q4.png": "ab5336d054da009ae74f67936b68a4fe",
"assets/assets/images/q5.png": "7a3871342810ce7bdf74945fcfae7929",
"assets/assets/images/q5big.png": "453b8ff8ccb8c21581bdcb1e4eb95881",
"assets/assets/images/q6.png": "2e3948e92b13730f6abc2e32780933be",
"assets/assets/images/q6big.png": "4f2a40b0e5d3cfa4bbc17122bc31b783",
"assets/assets/images/q7.png": "4365910a01a28e9dc07314992ee99ef6",
"assets/assets/images/q8.png": "ec6b147facdb13bd4faeb1d158693313",
"assets/assets/images/regles.png": "e262d55be906c293d3adeedf460d512e",
"assets/assets/images/right.png": "23196fec4ff9f10ab0ffd88cd7a59bc1",
"assets/assets/images/righticon.png": "206e2146683ec499c31d62474261b52f",
"assets/assets/images/Salle4.png": "c37e140ec5aa73344789714924a8571d",
"assets/assets/images/star.png": "e5fe2c9028755a60c93ce9f3fd54f060",
"assets/assets/images/welcome.png": "1d12882e791e68c87b59d45765db3277",
"assets/FontManifest.json": "f26e6f91f674ce3b5dc48067a71f8bdb",
"assets/fonts/MaterialIcons-Regular.otf": "48d59e19aaddde7443363e487f17d082",
"assets/NOTICES": "227bb243b7185d864e5324b333b1aae2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "31f649dbbf76e5542cb21dc2a66e708a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2ef52dbd9b8b99a4276ec764898c89ec",
"/": "2ef52dbd9b8b99a4276ec764898c89ec",
"main.dart.js": "abd3876a40aa0d7ff10ab608792d44e0",
"manifest.json": "f26776e0e54c91d02297ecd0ed1b2e67",
"version.json": "3ec0f72ae970fff6223ac8f2269e120b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
