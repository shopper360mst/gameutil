/**
 * @exports GameUtil
 */
export default class GameUtil {
    /**
     * set a sharable key value.
     * 
     * @param {String} key any key related as long is readable.
     * @param {Any} value any value of any type.
     * @example
     * import GameUtil from './gameutil/GameUtil.js'; 
     * export default class Something {
     *      someFunction() {
     *          GameUtil.setData('isGameOver', true);
     *      }
     * }
     */
    static setData(key, value) {
            this[key] = value;
        }
        /**
         * returns key value.
         * 
         * @param {String} key any key related, you need know your key.
         * @returns {Any}
         * @example
         * import GameUtil from './gameutil/GameUtil.js'; 
         * export default class Something {
         *      someFunction() {
         *          let bIsGameOver = GameUtil.getData('isGameOver');
         *          if (bIsGameOver) {
         *                 alert('Tada');
         *          }
         *      }
         * }
         */
    static getData(key) {
            return this[key];
        }
        /**
         * returns string of value kept in key, this copy of the value.
         * 
         * @param {String} key any key related, you need know your key.
         * @returns {Object}
         * @example
         * import GameUtil from './gameutil/GameUtil.js'; 
         * export default class Something {
         *      someFunction() {
         *          let COPIED_CONFIG = GameUtil.copyJSONData('CONFIG');
         *          console.log( 'We can modify COPIED_CONFIG values here', COPIED_CONFIG );
         *      }
         * }
         */
    static copyJSONData(key) {
            var copied = JSON.stringify(this[key]);
            return JSON.parse(copied);
        }
        /**
         * Pick a number of random positions in given arraylist.
         * 
         * @param {Integer} no_items no of items you want from the second parameter which is an array.
         * @param {Array} array_list array of list.
         * @returns {Array}
         * @example
         * import GameUtil from './gameutil/GameUtil.js'; 
         * export default class Something {
         *      someFunction() {
         *          let no_items = 2;
         *          let a_list = ['Banana', 'Orange', 'Durian', 'Pineapple', 'Mango', 'Laici', 'Watermelon'];
         *          let result = GameUtil.pickFromList(no_items,a_list);
         *          console.log(result);
         *      }
         * }
         */
    static pickFromList(no_items, arrayList) {
            const shuffled = arrayList.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, no_items);
        }
        /**
         * returns computed delta time, the third parameter determines the mode.
         * 
         * @param {Date} startTime start date time, in javascript Date object.
         * @param {Date} endTime end date time, in javascript Date object.
         * @returns {Integer}
         * @example
         * import GameUtil from './gameutil/GameUtil.js'; 
         * export default class Something {
         *      someFunction(time1,time2) {
         *          let deltaMilisecs = GameUtil.deltaTime(time1,time2,'miliseconds');
         *          console.log(deltaMilisecs);
         *      }
         * }
         */
    static deltaTime(startTime, endTime, mode) {
            var fT = endTime.getTime() - startTime.getTime();
            console.log('fT', fT);
            switch (mode) {
                case "seconds":
                    return fT / 1000;
                case "milliseconds":
                    return fT;
                default:
                    return fT;
            }
        }
        /**
         * find a character or word within a string.
         * 
         * @param {String} sKeyword string or character keyword to find
         * @param {String} fullString the full set of string
         * @returns {Boolean}
         * @example
         * import GameUtil from './gameutil/GameUtil.js'; 
         * export default class Something {
         *      someFunction() {
         *          let food = "orange";
         *          let phrase = "William loves to eat orange";
         *          let bFound = GameUtil.findExist(food,phrase);
         *          console.log(bFound);
         *      }
         * } 
         */
    static findExist(sKeyword, fullString) {
            if (fullString.indexOf(sKeyword) === -1) {
                return false;
            } else {
                return true;
            }
        }
        /**
         * find a distance between two point system in canvas.
         * 
         * @param {Number} x1 coordinate of x for first point
         * @param {Number} x2 coordinate of x for second point
         * @param {Number} y1 coordinate of y for first point
         * @param {Number} y2 coordinate of y for second point
         * @returns {Number}
         * @example
         * import GameUtil from './gameutil/GameUtil.js'; 
         * export default class Something {
         *      someFunction() {
         *          let x1 = 10.5;
         *          let x2 = 50;
         *          let y1 = 20;
         *          let y2 = 30;
         *          console.log(GameUtil.calcVectorDistance(x1,x2,y1,y2));
         *      }
         * } 
         */
    static calcVectorDistance(x1, x2, y1, y2) {
            let a = x1 - x2;
            let b = y1 - y2;
            let c = Math.sqrt(a * a + b * b);
            return c;
        }
        /**
         * To calculate bonus and multiplier.
         * 
         * @param {Number} seed variable by the system
         * @param {Number} multiplier additional multiplier 
         * @param {Number} bonus additional fixed bonus
         * @returns {Number}
         * @example
         * import GameUtil from './gameutil/GameUtil.js'; 
         * export default class Something {
         *      someFunction() {
         *          let seed = 500;
         *          let multiplier = 5;
         *          let bonus = 1000;
         *          console.log(GameUtil.calculateFS(seed, multiplier, bonus));
         *          console.log(GameUtil.calculateFS(seed, multiplier));
         *      }
         * } 
         */
    static calculateFS(seed, multiplier, bonus) {
        if (bonus) {
            return ((seed * multiplier) + bonus);
        } else {
            return (seed * multiplier);
        }
    }

    /**
     * To calculate best height ratio for entire canvas.
     * 
     * @param {Number} width variable for desired width e.g. 640
     * @param {Number} height variable for desired width e.g. 960
     * @returns {Number}
     * @example
     * import GameUtil from './gameutil/GameUtil.js'; 
     * export default class Something {
     *      someFunction() {
     *          let width = 640;
     *          let height = 960;
     *          console.log(GameUtil.calcHeightRatio(width, height));
     *      }
     * } 
     */
    static calcHeightRatio(width, height) {
            var windowRatio = window.innerWidth / window.innerHeight;
            if (windowRatio < width / height) {
                var computedHeight = width / windowRatio;
                return computedHeight;
            } else {
                return height;
            }
        }
        /**
         * To utility to return an empty highscore list used for game starters prior real entry.
         * 
         * @returns {Object}
         */
    static populateStubHighscore() {
        let emptyHS = [];
        for (var i = 0; i < 10; i++) {
            emptyHS.push({ "name": "No Entry Yet", "score": 0 });
        }
        return emptyHS;
    }
};