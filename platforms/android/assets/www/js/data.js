mealPlanService = (function () {

    var findById = function (id) {
            var deferred = $.Deferred();
            var employee = null;
            var l = employees.length;
            for (var i = 0; i < l; i++) {
                if (employees[i].id == id) {
                    employee = employees[i];
                    break;
                }
            }
            deferred.resolve(employee);
            return deferred.promise();
        },

        findByName = function (searchKey) {
            var deferred = $.Deferred();
           var results = mealPlans.filter(function (element) {
                return element.Name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });

            deferred.resolve(results);
            return deferred.promise();
        },

        findByManager = function (managerId) {
            var deferred = $.Deferred();
            var results = employees.filter(function (element) {
                return managerId === element.managerId;
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        getAll = function(){
            var deferred = $.Deferred();
            var results = mealPlans;
            deferred.resolve(results);
            return deferred.promise();
        }

        mealPlans = [{"Name":"Plano 2","Meals":[{"Time":"0001-01-01T00:00:00","Name":"Desjejum (6:30h)","Dishes":{"m_MaxCapacity":2147483647,"Capacity":1376,"m_StringValue":"Suco da saúde da saúde: + 1 folha de couve mineira + 1 raminho de agrião OU rúcula + ½ cenoura + ½ beterraba + 1 rabanete + 1 raminho de salsinha + ½ copo de água + 1 fruta\r\nOU\r\n1 copo de suco verde: 1 folha de couve mineira + 2 flores de brócolis + 1 fatia de abacaxi + suco de 1 limão + Hortelã e gengibre\r\nOU\r\nSuco vermelho: 1 fatia de melancia + 8 morangos + 1 folha de repolho + gengibre + 1 copo de água\r\nOU Suco laranja: 1 fatia de mamão + suco de 1 laranja OU 1 laranja + ½ cenoura + 1 colher de chá de açafrão em pó\r\nVariar os sucos durante a semana. Bater bem no liquidificador e não coar. Podes porcionar as frutas e colocar no congelador (melancia, maracujá, morango, abacaxi..). Preferência para orgânicos.\r\n","m_currentThread":0}},{"Time":"0001-01-01T00:00:00","Name":"Café da manhã (8:30h)","Dishes":{"m_MaxCapacity":2147483647,"Capacity":248,"m_StringValue":"+ 2 fatias de pão integral caseiro OU 2 fatias de pão integral\r\n+ 1 fio de azeite de oliva\r\n+ 1 ponta de faca de queijo cottage OU 1 fatia de queijo minas\r\n+ 1 fatia de blanquet de peru\r\n+ 1 maçã OU 1 fruta\r\n+ 1 L de água pela manhã\r\n","m_currentThread":0}},{"Time":"0001-01-01T00:00:00","Name":"Lanche da manhã (10:30h)","Dishes":{"m_MaxCapacity":2147483647,"Capacity":418,"m_StringValue":"+ 1 fruta OU 15g de mix de oleaginosas (2 castanhas do Para + amêndoas, avelãs, castanhas, nozes) OU 1 barra de cereal (Levittá, Bio2, Naturey Valley, Jasmine Super Bar, Kobber Light) OU 1x por semana: Belvita\r\n","m_currentThread":0}},{"Time":"0001-01-01T00:00:00","Name":"Almoço (11:40h)","Dishes":{"m_MaxCapacity":2147483647,"Capacity":784,"m_StringValue":"+ ½ prato salada variada mínimo 4 tipos (rúcula, alface, brócolis, tomate, cenoura, abóbora, etc.)\r\n+ 1 fio de azeite de oliva\r\n+ 1 colher de sobremesa de linhaça dourada\r\n+ 1 colher de servir de arroz integral\r\n+ 1 pedaço de batata doce OU batata OU aipim OU ½ colher de servir de polenta OU purê de batata\r\n+ 1 concha de feijão OU lentilha\r\n+ 1 filé grande de peixe OU frango OU lombo suíno OU 1 pedaço pequeno de carne OU 2 colheres de servir de frutos do mar (assados, grelhados ou em molho vermelho)\r\n+ 1 L de água a tarde\r\n","m_currentThread":0}},{"Time":"0001-01-01T00:00:00","Name":"Lanche da Tarde 1 (15:30h)","Dishes":{"m_MaxCapacity":2147483647,"Capacity":512,"m_StringValue":"+ 1 banana OU 1 fruta + 4 colheres de sopa de granola sem açúcar\r\n+ 30 g de oleaginosas OU ¼ de abacate\r\nOU\r\n+ 1 fruta\r\n+ 1 sanduiche com pão integral + 1 fio de azeite de oliva + queijo cottage ou queijo meninas + 1 fatia de blanquet de peru\r\nE-mail: camilacsbrito@hotmail.com\r\nFacebook.com/camilabritonutricionista / Instagram.com/nutricamilabrito\r\n","m_currentThread":0}},{"Time":"0001-01-01T00:00:00","Name":"Lanche pré-treino – 30 minutos antes","Dishes":{"m_MaxCapacity":2147483647,"Capacity":164,"m_StringValue":"+ 1 banana OU 20 a 30g de biscoitos integrais OU 1 barra de cereal OU 1 paçoquinha\r\nOU\r\n+ 1 fruta + 15 g de whey\r\n+ 1 L de água a noite\r\n","m_currentThread":0}},{"Time":"0001-01-01T00:00:00","Name":"Pós-treino – imediatamente após o treino","Dishes":{"m_MaxCapacity":2147483647,"Capacity":64,"m_StringValue":"+ 1 dose de BCAA (1g de leucina)\r\n+ 15g de Whey protein\r\n","m_currentThread":0}},{"Time":"0001-01-01T00:00:00","Name":"Jantar (20:30h)","Dishes":{"m_MaxCapacity":2147483647,"Capacity":920,"m_StringValue":"+ 1 crepioca (1 ovo + 1 colher de sopa de goma de tapioca + 2 colher de sopa de semente de chia, linhaça, gergelim)\r\n+ 3 colheres de sopa de atum OU sardinha OU 1 fatia de queijo minas + 1 fatia de blanquet de peru\r\nOU\r\n+ 3 colheres de servir rasas de risoto low carb\r\nOU\r\n+ 1 colher de servir de arroz integral OU 2 fatias (3 dedos) de batata doce OU aipim Ou quinoa em grãos\r\n+ 1 porção (100g) de hambúrguer (receitas) OU 1 filé médio peixe OU frango OU carne\r\nOU\r\n+ omelete com 3 ovos + legumes (brócolis, couve, berinjela, tomate,c ebola...)\r\nOU\r\n+ 1 porção de congelados saudáveis\r\nAcompanhar os pratos com salada variada mínimo 4 tipos + 1 fio de azeite de oliva\r\n","m_currentThread":0}}]}];

        employees = [
            {"id": 1, "firstName": "James", "lastName": "King", "managerId": 0, "managerName": "", "reports": 4, "title": "President and CEO", "department": "Corporate", "mobilePhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "james_king.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
            {"id": 2, "firstName": "Julie", "lastName": "Taylor", "managerId": 1, "managerName": "James King", "reports": 2, "title": "VP of Marketing", "department": "Marketing", "mobilePhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "julie_taylor.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"},
            {"id": 3, "firstName": "Eugene", "lastName": "Lee", "managerId": 1, "managerName": "James King", "reports": 0, "title": "CFO", "department": "Accounting", "mobilePhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "city": "Boston, MA", "pic": "eugene_lee.jpg", "twitterId": "@fakeelee", "blog": "http://coenraets.org"},
            {"id": 4, "firstName": "John", "lastName": "Williams", "managerId": 1, "managerName": "James King", "reports": 3, "title": "VP of Engineering", "department": "Engineering", "mobilePhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "john_williams.jpg", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
            {"id": 5, "firstName": "Ray", "lastName": "Moore", "managerId": 1, "managerName": "James King", "reports": 2, "title": "VP of Sales", "department": "Sales", "mobilePhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "city": "Boston, MA", "pic": "ray_moore.jpg", "twitterId": "@fakermoore", "blog": "http://coenraets.org"},
            {"id": 6, "firstName": "Paul", "lastName": "Jones", "managerId": 4, "managerName": "John Williams", "reports": 0, "title": "QA Manager", "department": "Engineering", "mobilePhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "city": "Boston, MA", "pic": "paul_jones.jpg", "twitterId": "@fakepjones", "blog": "http://coenraets.org"},
            {"id": 7, "firstName": "Paula", "lastName": "Gates", "managerId": 4, "managerName": "John Williams", "reports": 0, "title": "Software Architect", "department": "Engineering", "mobilePhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "city": "Boston, MA", "pic": "paula_gates.jpg", "twitterId": "@fakepgates", "blog": "http://coenraets.org"},
            {"id": 8, "firstName": "Lisa", "lastName": "Wong", "managerId": 2, "managerName": "Julie Taylor", "reports": 0, "title": "Marketing Manager", "department": "Marketing", "mobilePhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com", "city": "Boston, MA", "pic": "lisa_wong.jpg", "twitterId": "@fakelwong", "blog": "http://coenraets.org"},
            {"id": 9, "firstName": "Gary", "lastName": "Donovan", "managerId": 2, "managerName": "Julie Taylor", "reports": 0, "title": "Marketing Manager", "department": "Marketing", "mobilePhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "city": "Boston, MA", "pic": "gary_donovan.jpg", "twitterId": "@fakegdonovan", "blog": "http://coenraets.org"},
            {"id": 10, "firstName": "Kathleen", "lastName": "Byrne", "managerId": 5, "managerName": "Ray Moore", "reports": 0, "title": "Sales Representative", "department": "Sales", "mobilePhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com", "city": "Boston, MA", "pic": "kathleen_byrne.jpg", "twitterId": "@fakekbyrne", "blog": "http://coenraets.org"},
            {"id": 11, "firstName": "Amy", "lastName": "Jones", "managerId": 5, "managerName": "Ray Moore", "reports": 0, "title": "Sales Representative", "department": "Sales", "mobilePhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com", "city": "Boston, MA", "pic": "amy_jones.jpg", "twitterId": "@fakeajones", "blog": "http://coenraets.org"},
            {"id": 12, "firstName": "Steven", "lastName": "Wells", "managerId": 4, "managerName": "John Williams", "reports": 0, "title": "Software Architect", "department": "Engineering", "mobilePhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "steven_wells.jpg", "twitterId": "@fakeswells", "blog": "http://coenraets.org"}
        ];

    // The public API
    return {
        findById: findById,
        findByName: findByName,
        findByManager: findByManager,
        getAll: getAll
    };

}());
