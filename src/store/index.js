import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import moment from "moment";

Vue.use(Vuex);

import login_actions from "./login-actions";
import score_actions from "./score-actions";
import event_actions from "./event-actions";
import challenge_actions from "./challenge-actions";

import { USER } from "./links";

export function myLocalLocalsotarge(state, key, value) {
  // 0 for get
  // 1 for set
  // 2 for remove

  if (process.isClient) {
    switch (state) {
      case 0:
        return localStorage.getItem(key);
      case 1:
        return localStorage.setItem(key, value);
      case 2:
        return localStorage.removeItem(key);
    }
  }
  return null;
}

export const store = new Vuex.Store({
  state: {
    signedIn: false,
    dark: false,
    latestEvent: {
      "id": 4,
      "name": "BauCTF Summer 2021",
      "type": "Online",
      "format": "Jeopardy",
      "open": "0",
      "record": "0",
      "start": "Sat, 21-Aug-2021 19:30 UTC",
      "end": "Sat, 21-Aug-2021 23:30 UTC",
      "max_score": "500",
      "min_score": "200",
      "no_c": "4",
      "scoreboard": null,
      "created_at": null,
      "updated_at": null
    },
    user: {},
    scoreboards: {
      "1": {
          "id": 1,
          "name": "BauCTF Winter 2019 Warmup",
          "type": "Online",
          "format": "Jeopardy",
          "open": "0",
          "record": "1",
          "start": "Fri, 27-Dec-2019 16:00 UTC",
          "end": "Fri, 27-Dec-2019 20:00 UTC",
          "max_score": "200",
          "min_score": "30",
          "no_c": "6",
          "scoreboard": {
              "challenges": {
                  "1": {
                      "id": "1",
                      "title": "BrainDuck",
                      "score": "50"
                  },
                  "2": {
                      "id": "2",
                      "title": "c0mrade",
                      "score": "60"
                  },
                  "3": {
                      "id": "3",
                      "title": "ArduinoLock",
                      "score": "100"
                  },
                  "4": {
                      "id": "4",
                      "title": "Friends Romans Countrymen",
                      "score": "70"
                  },
                  "5": {
                      "id": "5",
                      "title": "warrior",
                      "score": "120"
                  },
                  "6": {
                      "id": "6",
                      "title": "Francis",
                      "score": "120"
                  }
              },
              "participants": [
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2019-12-27 04:40:00",
                              "score": "50",
                              "created_at": "01:40"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2019-12-27 05:49:12",
                              "score": "60",
                              "created_at": "02:49"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 05:04:32",
                              "score": "100",
                              "created_at": "02:04"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 05:17:01",
                              "score": "70",
                              "created_at": "02:17"
                          },
                          "5": {
                              "pid": "5",
                              "ts": "2019-12-27 07:12:04",
                              "score": "120",
                              "created_at": "04:12"
                          },
                          "6": {
                              "pid": "6",
                              "ts": "2019-12-27 05:42:40",
                              "score": "120",
                              "created_at": "02:42"
                          }
                      },
                      "name": "Tea For Three",
                      "score": 520,
                      "time": 9464528729
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2019-12-27 04:59:29",
                              "score": "50",
                              "created_at": "01:59"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2019-12-27 08:29:07",
                              "score": "60",
                              "created_at": "05:29"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 05:23:11",
                              "score": "100",
                              "created_at": "02:23"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 05:55:51",
                              "score": "70",
                              "created_at": "02:55"
                          },
                          "5": {
                              "pid": "5",
                              "ts": "2019-12-27 07:23:10",
                              "score": "120",
                              "created_at": "04:23"
                          },
                          "6": {
                              "pid": "6",
                              "ts": "2019-12-27 06:28:13",
                              "score": "120",
                              "created_at": "03:28"
                          }
                      },
                      "name": "uckctf",
                      "score": 520,
                      "time": 9464546341
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2019-12-27 07:13:09",
                              "score": "50",
                              "created_at": "04:13"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2019-12-27 07:22:23",
                              "score": "60",
                              "created_at": "04:22"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 06:26:59",
                              "score": "100",
                              "created_at": "03:26"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 07:35:42",
                              "score": "70",
                              "created_at": "04:35"
                          },
                          "5": {
                              "pid": "5",
                              "ts": "2019-12-27 07:58:22",
                              "score": "120",
                              "created_at": "04:58"
                          },
                          "6": {
                              "pid": "6",
                              "ts": "2019-12-27 07:07:18",
                              "score": "120",
                              "created_at": "04:07"
                          }
                      },
                      "name": "KhubayeHack",
                      "score": 520,
                      "time": 9464564633
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2019-12-27 04:53:01",
                              "score": "50",
                              "created_at": "01:53"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2019-12-27 06:42:02",
                              "score": "60",
                              "created_at": "03:42"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 04:58:55",
                              "score": "100",
                              "created_at": "01:58"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 05:28:03",
                              "score": "70",
                              "created_at": "02:28"
                          },
                          "5": {
                              "pid": "5",
                              "ts": "2019-12-27 06:09:37",
                              "score": "120",
                              "created_at": "03:09"
                          }
                      },
                      "name": "ElcWiz",
                      "score": 400,
                      "time": 7887107498
                  },
                  {
                      "taskStats": {
                          "2": {
                              "pid": "2",
                              "ts": "2019-12-27 05:30:06",
                              "score": "60",
                              "created_at": "02:30"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 04:59:22",
                              "score": "100",
                              "created_at": "01:59"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 05:03:47",
                              "score": "70",
                              "created_at": "02:03"
                          },
                          "5": {
                              "pid": "5",
                              "ts": "2019-12-27 07:02:05",
                              "score": "120",
                              "created_at": "04:02"
                          }
                      },
                      "name": "Haise",
                      "score": 350,
                      "time": 6309686120
                  },
                  {
                      "taskStats": {
                          "2": {
                              "pid": "2",
                              "ts": "2019-12-27 08:34:26",
                              "score": "60",
                              "created_at": "05:34"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 05:37:15",
                              "score": "100",
                              "created_at": "02:37"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 06:26:53",
                              "score": "70",
                              "created_at": "03:26"
                          },
                          "6": {
                              "pid": "6",
                              "ts": "2019-12-27 07:30:10",
                              "score": "120",
                              "created_at": "04:30"
                          }
                      },
                      "name": "ECESA",
                      "score": 350,
                      "time": 6309706124
                  },
                  {
                      "taskStats": {
                          "2": {
                              "pid": "2",
                              "ts": "2019-12-27 08:24:44",
                              "score": "60",
                              "created_at": "05:24"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 05:29:32",
                              "score": "100",
                              "created_at": "02:29"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 06:18:26",
                              "score": "70",
                              "created_at": "03:18"
                          },
                          "5": {
                              "pid": "5",
                              "ts": "2019-12-27 08:05:06",
                              "score": "120",
                              "created_at": "05:05"
                          }
                      },
                      "name": "MoghadaS",
                      "score": 350,
                      "time": 6309706668
                  },
                  {
                      "taskStats": {
                          "2": {
                              "pid": "2",
                              "ts": "2019-12-27 08:21:58",
                              "score": "60",
                              "created_at": "05:21"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 05:27:22",
                              "score": "100",
                              "created_at": "02:27"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 06:45:37",
                              "score": "70",
                              "created_at": "03:45"
                          },
                          "6": {
                              "pid": "6",
                              "ts": "2019-12-27 08:01:52",
                              "score": "120",
                              "created_at": "05:01"
                          }
                      },
                      "name": "jojo",
                      "score": 350,
                      "time": 6309707809
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2019-12-27 05:41:30",
                              "score": "50",
                              "created_at": "02:41"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 05:13:34",
                              "score": "100",
                              "created_at": "02:13"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 05:29:42",
                              "score": "70",
                              "created_at": "02:29"
                          },
                          "5": {
                              "pid": "5",
                              "ts": "2019-12-27 08:25:12",
                              "score": "120",
                              "created_at": "05:25"
                          }
                      },
                      "name": "Lapodo",
                      "score": 340,
                      "time": 6309694198
                  },
                  {
                      "taskStats": {
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 05:13:40",
                              "score": "100",
                              "created_at": "02:13"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 06:02:37",
                              "score": "70",
                              "created_at": "03:02"
                          },
                          "5": {
                              "pid": "5",
                              "ts": "2019-12-27 05:32:01",
                              "score": "120",
                              "created_at": "02:32"
                          }
                      },
                      "name": "هویج",
                      "score": 290,
                      "time": 4732264098
                  },
                  {
                      "taskStats": {
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 05:30:14",
                              "score": "100",
                              "created_at": "02:30"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 07:42:21",
                              "score": "70",
                              "created_at": "04:42"
                          },
                          "5": {
                              "pid": "5",
                              "ts": "2019-12-27 06:52:04",
                              "score": "120",
                              "created_at": "03:52"
                          }
                      },
                      "name": "Khodaroshokrrrr",
                      "score": 290,
                      "time": 4732275879
                  },
                  {
                      "taskStats": {
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 06:44:46",
                              "score": "100",
                              "created_at": "03:44"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 08:07:01",
                              "score": "70",
                              "created_at": "05:07"
                          },
                          "5": {
                              "pid": "5",
                              "ts": "2019-12-27 08:42:20",
                              "score": "120",
                              "created_at": "05:42"
                          }
                      },
                      "name": "Invictus",
                      "score": 290,
                      "time": 4732288447
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2019-12-27 06:46:29",
                              "score": "50",
                              "created_at": "03:46"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2019-12-27 08:18:13",
                              "score": "60",
                              "created_at": "05:18"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 07:38:47",
                              "score": "100",
                              "created_at": "04:38"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 07:00:12",
                              "score": "70",
                              "created_at": "04:00"
                          }
                      },
                      "name": "Hive Mind",
                      "score": 280,
                      "time": 6309711821
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2019-12-27 08:31:41",
                              "score": "50",
                              "created_at": "05:31"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2019-12-27 08:58:35",
                              "score": "60",
                              "created_at": "05:58"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 06:31:05",
                              "score": "100",
                              "created_at": "03:31"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 07:10:55",
                              "score": "70",
                              "created_at": "04:10"
                          }
                      },
                      "name": "INFINITY",
                      "score": 280,
                      "time": 6309717136
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2019-12-27 07:13:37",
                              "score": "50",
                              "created_at": "04:13"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 05:04:39",
                              "score": "100",
                              "created_at": "02:04"
                          },
                          "5": {
                              "pid": "5",
                              "ts": "2019-12-27 08:53:24",
                              "score": "120",
                              "created_at": "05:53"
                          }
                      },
                      "name": "رو هوا",
                      "score": 270,
                      "time": 4732279900
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2019-12-27 05:43:23",
                              "score": "50",
                              "created_at": "02:43"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 05:06:02",
                              "score": "100",
                              "created_at": "02:06"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 05:51:51",
                              "score": "70",
                              "created_at": "02:51"
                          }
                      },
                      "name": "AmMa",
                      "score": 220,
                      "time": 4732263676
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2019-12-27 06:08:52",
                              "score": "50",
                              "created_at": "03:08"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 06:32:21",
                              "score": "100",
                              "created_at": "03:32"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 06:32:55",
                              "score": "70",
                              "created_at": "03:32"
                          }
                      },
                      "name": "drunk_quux",
                      "score": 220,
                      "time": 4732272848
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2019-12-27 08:48:40",
                              "score": "50",
                              "created_at": "05:48"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 05:38:22",
                              "score": "100",
                              "created_at": "02:38"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 05:50:30",
                              "score": "70",
                              "created_at": "02:50"
                          }
                      },
                      "name": "av",
                      "score": 220,
                      "time": 4732276652
                  },
                  {
                      "taskStats": {
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 05:23:57",
                              "score": "100",
                              "created_at": "02:23"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 05:34:49",
                              "score": "70",
                              "created_at": "02:34"
                          }
                      },
                      "name": "FML",
                      "score": 170,
                      "time": 3154841926
                  },
                  {
                      "taskStats": {
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 05:37:18",
                              "score": "100",
                              "created_at": "02:37"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 06:12:22",
                              "score": "70",
                              "created_at": "03:12"
                          }
                      },
                      "name": "APS",
                      "score": 170,
                      "time": 3154844980
                  },
                  {
                      "taskStats": {
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 05:22:57",
                              "score": "100",
                              "created_at": "02:22"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 07:01:08",
                              "score": "70",
                              "created_at": "04:01"
                          }
                      },
                      "name": "CryptoGhosts",
                      "score": 170,
                      "time": 3154847045
                  },
                  {
                      "taskStats": {
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 06:16:30",
                              "score": "100",
                              "created_at": "03:16"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 06:36:52",
                              "score": "70",
                              "created_at": "03:36"
                          }
                      },
                      "name": "H&E",
                      "score": 170,
                      "time": 3154848802
                  },
                  {
                      "taskStats": {
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 06:17:46",
                              "score": "100",
                              "created_at": "03:17"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 07:47:41",
                              "score": "70",
                              "created_at": "04:47"
                          }
                      },
                      "name": "راز",
                      "score": 170,
                      "time": 3154853127
                  },
                  {
                      "taskStats": {
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 07:21:38",
                              "score": "100",
                              "created_at": "04:21"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2019-12-27 07:44:53",
                              "score": "70",
                              "created_at": "04:44"
                          }
                      },
                      "name": "پاستیلامون بو وایتکس میده",
                      "score": 170,
                      "time": 3154856791
                  },
                  {
                      "taskStats": {
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 05:15:27",
                              "score": "100",
                              "created_at": "02:15"
                          }
                      },
                      "name": "lebensmüde",
                      "score": 100,
                      "time": 1577420127
                  },
                  {
                      "taskStats": {
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 05:16:56",
                              "score": "100",
                              "created_at": "02:16"
                          }
                      },
                      "name": "asdf!!",
                      "score": 100,
                      "time": 1577420216
                  },
                  {
                      "taskStats": {
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 05:38:59",
                              "score": "100",
                              "created_at": "02:38"
                          }
                      },
                      "name": "Redbees",
                      "score": 100,
                      "time": 1577421539
                  },
                  {
                      "taskStats": {
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 05:48:23",
                              "score": "100",
                              "created_at": "02:48"
                          }
                      },
                      "name": "عقاب های خشمگین",
                      "score": 100,
                      "time": 1577422103
                  },
                  {
                      "taskStats": {
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 06:03:16",
                              "score": "100",
                              "created_at": "03:03"
                          }
                      },
                      "name": "SMT",
                      "score": 100,
                      "time": 1577422996
                  },
                  {
                      "taskStats": {
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 06:06:06",
                              "score": "100",
                              "created_at": "03:06"
                          }
                      },
                      "name": "پت و مت",
                      "score": 100,
                      "time": 1577423166
                  },
                  {
                      "taskStats": {
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 06:27:18",
                              "score": "100",
                              "created_at": "03:27"
                          }
                      },
                      "name": "3Kh",
                      "score": 100,
                      "time": 1577424438
                  },
                  {
                      "taskStats": {
                          "3": {
                              "pid": "3",
                              "ts": "2019-12-27 08:21:57",
                              "score": "100",
                              "created_at": "05:21"
                          }
                      },
                      "name": "کارآگاه گجت",
                      "score": 100,
                      "time": 1577431317
                  },
                  {
                      "taskStats": [],
                      "name": "PR3T3ND3RS",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "امید",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Plopio",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "SCE",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "E&A",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "جنگالیا",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "TTM",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "stackunderflow",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "مفتح",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Mind Map Orbs",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Hackers",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Anonymous",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "AAAAAA",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "PS",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Newbies",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "آقای شریفی",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "آراد",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "vip3r",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Jack",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "o_O",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "تامیلا",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "esrever",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "New codekesh",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "K-team",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Enigma",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "main.c",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "عسم",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Snow leopard",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "رمزینه",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "EVE",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "kali",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Mad ebram",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Phenomenon",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Seen",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "F",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "test",
                      "score": 0,
                      "time": 0
                  }
              ]
          },
          "created_at": null,
          "updated_at": null,
          "no": 4
      },
      "2": {
          "id": 2,
          "name": "BauCTF Winter 2020 Quals",
          "type": "Online",
          "format": "Jeopardy",
          "open": "0",
          "record": "1",
          "start": "Fri, 06-Mar-2020 16:00 UTC",
          "end": "Fri, 06-Mar-2020 20:00 UTC",
          "max_score": "200",
          "min_score": "0",
          "no_c": "8",
          "scoreboard": {
              "challenges": {
                  "1": {
                      "id": "1",
                      "title": "FINDME",
                      "score": "35"
                  },
                  "2": {
                      "id": "2",
                      "title": "Dracula",
                      "score": "40"
                  },
                  "3": {
                      "id": "3",
                      "title": "GPanel",
                      "score": "50"
                  },
                  "4": {
                      "id": "4",
                      "title": "Mississippi Has Four Ss",
                      "score": "55"
                  },
                  "5": {
                      "id": "5",
                      "title": "Girl With Pearl Earring",
                      "score": "60"
                  },
                  "6": {
                      "id": "6",
                      "title": "Caesar Salad with Balsamic Vinegar",
                      "score": "65"
                  },
                  "7": {
                      "id": "7",
                      "title": "CSafe",
                      "score": "70"
                  },
                  "8": {
                      "id": "8",
                      "title": "FFSdoJS",
                      "score": "75"
                  }
              },
              "participants": [
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 04:38:45",
                              "score": "35",
                              "created_at": "01:38"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 05:08:38",
                              "score": "40",
                              "created_at": "02:08"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2020-03-06 06:29:32",
                              "score": "50",
                              "created_at": "03:29"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2020-03-06 07:58:13",
                              "score": "55",
                              "created_at": "04:58"
                          },
                          "6": {
                              "pid": "6",
                              "ts": "2020-03-06 07:22:34",
                              "score": "65",
                              "created_at": "04:22"
                          }
                      },
                      "name": "uckctf",
                      "score": 245,
                      "time": 7917359862
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 07:43:10",
                              "score": "35",
                              "created_at": "04:43"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 04:42:57",
                              "score": "40",
                              "created_at": "01:42"
                          },
                          "8": {
                              "pid": "8",
                              "ts": "2020-03-06 06:21:15",
                              "score": "75",
                              "created_at": "03:21"
                          }
                      },
                      "name": "Haise",
                      "score": 150,
                      "time": 4750415242
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 04:46:31",
                              "score": "35",
                              "created_at": "01:46"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2020-03-06 07:58:23",
                              "score": "55",
                              "created_at": "04:58"
                          },
                          "5": {
                              "pid": "5",
                              "ts": "2020-03-06 07:09:24",
                              "score": "60",
                              "created_at": "04:09"
                          }
                      },
                      "name": "رو هوا",
                      "score": 150,
                      "time": 4750419258
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 04:56:59",
                              "score": "35",
                              "created_at": "01:56"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 07:57:54",
                              "score": "40",
                              "created_at": "04:57"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2020-03-06 07:33:26",
                              "score": "55",
                              "created_at": "04:33"
                          }
                      },
                      "name": "Tea For Three",
                      "score": 130,
                      "time": 4750421299
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 05:11:02",
                              "score": "35",
                              "created_at": "02:11"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 04:42:03",
                              "score": "40",
                              "created_at": "01:42"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2020-03-06 07:01:52",
                              "score": "50",
                              "created_at": "04:01"
                          }
                      },
                      "name": "ElcWiz",
                      "score": 125,
                      "time": 4750408497
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 05:14:56",
                              "score": "35",
                              "created_at": "02:14"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 06:21:34",
                              "score": "40",
                              "created_at": "03:21"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2020-03-06 07:18:41",
                              "score": "50",
                              "created_at": "04:18"
                          }
                      },
                      "name": "MoghadaS",
                      "score": 125,
                      "time": 4750415711
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 07:48:00",
                              "score": "35",
                              "created_at": "04:48"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2020-03-06 07:56:56",
                              "score": "50",
                              "created_at": "04:56"
                          }
                      },
                      "name": "F",
                      "score": 85,
                      "time": 3166955096
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 05:44:48",
                              "score": "35",
                              "created_at": "02:44"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 04:41:03",
                              "score": "40",
                              "created_at": "01:41"
                          }
                      },
                      "name": "jojo",
                      "score": 75,
                      "time": 3166935951
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 04:33:58",
                              "score": "35",
                              "created_at": "01:33"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 06:25:13",
                              "score": "40",
                              "created_at": "03:25"
                          }
                      },
                      "name": "هویج",
                      "score": 75,
                      "time": 3166937951
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 05:22:56",
                              "score": "35",
                              "created_at": "02:22"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 05:51:55",
                              "score": "40",
                              "created_at": "02:51"
                          }
                      },
                      "name": "ECESA",
                      "score": 75,
                      "time": 3166938891
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 05:10:29",
                              "score": "35",
                              "created_at": "02:10"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 07:04:47",
                              "score": "40",
                              "created_at": "04:04"
                          }
                      },
                      "name": "پت و مت",
                      "score": 75,
                      "time": 3166942516
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 05:39:50",
                              "score": "35",
                              "created_at": "02:39"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 06:38:18",
                              "score": "40",
                              "created_at": "03:38"
                          }
                      },
                      "name": "av",
                      "score": 75,
                      "time": 3166942688
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 04:46:51",
                              "score": "35",
                              "created_at": "01:46"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 07:42:21",
                              "score": "40",
                              "created_at": "04:42"
                          }
                      },
                      "name": "Lapodo",
                      "score": 75,
                      "time": 3166943352
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 05:12:42",
                              "score": "35",
                              "created_at": "02:12"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 07:47:25",
                              "score": "40",
                              "created_at": "04:47"
                          }
                      },
                      "name": "CryptoGhosts",
                      "score": 75,
                      "time": 3166945207
                  },
                  {
                      "taskStats": {
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 06:43:35",
                              "score": "40",
                              "created_at": "03:43"
                          }
                      },
                      "name": "Plopio",
                      "score": 40,
                      "time": 1583473415
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 04:44:05",
                              "score": "35",
                              "created_at": "01:44"
                          }
                      },
                      "name": "INFINITY",
                      "score": 35,
                      "time": 1583466245
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 04:54:44",
                              "score": "35",
                              "created_at": "01:54"
                          }
                      },
                      "name": "kali",
                      "score": 35,
                      "time": 1583466884
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 05:25:27",
                              "score": "35",
                              "created_at": "02:25"
                          }
                      },
                      "name": "APS",
                      "score": 35,
                      "time": 1583468727
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 05:30:44",
                              "score": "35",
                              "created_at": "02:30"
                          }
                      },
                      "name": "H&E",
                      "score": 35,
                      "time": 1583469044
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 05:36:35",
                              "score": "35",
                              "created_at": "02:36"
                          }
                      },
                      "name": "Anonymous",
                      "score": 35,
                      "time": 1583469395
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 06:13:49",
                              "score": "35",
                              "created_at": "03:13"
                          }
                      },
                      "name": "Khodaroshokrrrr",
                      "score": 35,
                      "time": 1583471629
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 06:33:39",
                              "score": "35",
                              "created_at": "03:33"
                          }
                      },
                      "name": "PR3T3ND3RS",
                      "score": 35,
                      "time": 1583472819
                  },
                  {
                      "taskStats": [],
                      "name": "امید",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Invictus",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "SCE",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Redbees",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "E&A",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "جنگالیا",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "TTM",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "stackunderflow",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "مفتح",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Mind Map Orbs",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Hackers",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "AAAAAA",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "PS",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Newbies",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Hive Mind",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "آقای شریفی",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "راز",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "آراد",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "AmMa",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "vip3r",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "پاستیلامون بو وایتکس میده",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "lebensmüde",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Jack",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "o_O",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "KhubayeHack",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "تامیلا",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "esrever",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "کارآگاه گجت",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "SMT",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "New codekesh",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "K-team",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "عقاب های خشمگین",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Enigma",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "main.c",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "عسم",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Snow leopard",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "drunk_quux",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "رمزینه",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "EVE",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "asdf!!",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "3Kh",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "FML",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Mad ebram",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Phenomenon",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Seen",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "test",
                      "score": 0,
                      "time": 0
                  }
              ]
          },
          "created_at": null,
          "updated_at": null,
          "no": 4
      },
      "3": {
          "id": 3,
          "name": "BauCTF Summer 2020 Open",
          "type": "Online",
          "format": "Jeopardy",
          "open": "1",
          "record": "1",
          "start": "Fri, 06-Aug-2020 19:30 UTC",
          "end": "Fri, 06-Aug-2020 23:30 UTC",
          "max_score": "200",
          "min_score": "0",
          "no_c": "8",
          "scoreboard": {
              "challenges": {
                  "1": {
                      "id": "1",
                      "title": "FINDME",
                      "score": "35"
                  },
                  "2": {
                      "id": "2",
                      "title": "Dracula",
                      "score": "40"
                  },
                  "3": {
                      "id": "3",
                      "title": "GPanel",
                      "score": "50"
                  },
                  "4": {
                      "id": "4",
                      "title": "Mississippi Has Four Ss",
                      "score": "55"
                  },
                  "5": {
                      "id": "5",
                      "title": "Girl With Pearl Earring",
                      "score": "60"
                  },
                  "6": {
                      "id": "6",
                      "title": "Caesar Salad with Balsamic Vinegar",
                      "score": "65"
                  },
                  "7": {
                      "id": "7",
                      "title": "CSafe",
                      "score": "70"
                  },
                  "8": {
                      "id": "8",
                      "title": "FFSdoJS",
                      "score": "75"
                  }
              },
              "participants": [
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:08:44",
                              "score": "35",
                              "created_at": "01:38"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 08:26:24",
                              "score": "40",
                              "created_at": "01:56"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2020-03-06 08:36:56",
                              "score": "50",
                              "created_at": "02:06"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2020-03-06 08:47:22",
                              "score": "55",
                              "created_at": "02:17"
                          },
                          "5": {
                              "pid": "5",
                              "ts": "2020-03-06 09:31:25",
                              "score": "60",
                              "created_at": "03:01"
                          },
                          "6": {
                              "pid": "6",
                              "ts": "2020-03-06 10:52:16",
                              "score": "65",
                              "created_at": "04:22"
                          },
                          "7": {
                              "pid": "7",
                              "ts": "2020-03-06 08:21:50",
                              "score": "70",
                              "created_at": "01:51"
                          },
                          "8": {
                              "pid": "8",
                              "ts": "2020-03-06 10:26:58",
                              "score": "75",
                              "created_at": "03:56"
                          }
                      },
                      "name": "Defenit",
                      "score": 450,
                      "time": 12667857115
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:00:37",
                              "score": "35",
                              "created_at": "01:30"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 08:08:11",
                              "score": "40",
                              "created_at": "01:38"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2020-03-06 08:04:20",
                              "score": "50",
                              "created_at": "01:34"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2020-03-06 08:34:04",
                              "score": "55",
                              "created_at": "02:04"
                          },
                          "6": {
                              "pid": "6",
                              "ts": "2020-03-06 09:15:10",
                              "score": "65",
                              "created_at": "02:45"
                          },
                          "7": {
                              "pid": "7",
                              "ts": "2020-03-06 08:45:03",
                              "score": "70",
                              "created_at": "02:15"
                          },
                          "8": {
                              "pid": "8",
                              "ts": "2020-03-06 08:31:05",
                              "score": "75",
                              "created_at": "02:01"
                          }
                      },
                      "name": "OpenToAll",
                      "score": 390,
                      "time": 11084357910
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:02:26",
                              "score": "35",
                              "created_at": "01:32"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 08:04:28",
                              "score": "40",
                              "created_at": "01:34"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2020-03-06 08:11:18",
                              "score": "50",
                              "created_at": "01:41"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2020-03-06 08:45:25",
                              "score": "55",
                              "created_at": "02:15"
                          },
                          "6": {
                              "pid": "6",
                              "ts": "2020-03-06 09:26:51",
                              "score": "65",
                              "created_at": "02:56"
                          },
                          "7": {
                              "pid": "7",
                              "ts": "2020-03-06 08:02:53",
                              "score": "70",
                              "created_at": "01:32"
                          },
                          "8": {
                              "pid": "8",
                              "ts": "2020-03-06 09:24:02",
                              "score": "75",
                              "created_at": "02:54"
                          }
                      },
                      "name": "bootplug",
                      "score": 390,
                      "time": 11084360243
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:07:09",
                              "score": "35",
                              "created_at": "01:37"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 08:19:13",
                              "score": "40",
                              "created_at": "01:49"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2020-03-06 08:31:39",
                              "score": "50",
                              "created_at": "02:01"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2020-03-06 08:40:25",
                              "score": "55",
                              "created_at": "02:10"
                          },
                          "6": {
                              "pid": "6",
                              "ts": "2020-03-06 08:55:25",
                              "score": "65",
                              "created_at": "02:25"
                          },
                          "7": {
                              "pid": "7",
                              "ts": "2020-03-06 09:11:40",
                              "score": "70",
                              "created_at": "02:41"
                          },
                          "8": {
                              "pid": "8",
                              "ts": "2020-03-06 11:48:01",
                              "score": "75",
                              "created_at": "05:18"
                          }
                      },
                      "name": "0x90r00t",
                      "score": 390,
                      "time": 11084373212
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:22:00",
                              "score": "35",
                              "created_at": "01:52"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 08:21:10",
                              "score": "40",
                              "created_at": "01:51"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2020-03-06 10:01:40",
                              "score": "50",
                              "created_at": "03:31"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2020-03-06 09:36:57",
                              "score": "55",
                              "created_at": "03:06"
                          },
                          "6": {
                              "pid": "6",
                              "ts": "2020-03-06 08:49:08",
                              "score": "65",
                              "created_at": "02:19"
                          },
                          "7": {
                              "pid": "7",
                              "ts": "2020-03-06 09:12:28",
                              "score": "70",
                              "created_at": "02:42"
                          },
                          "8": {
                              "pid": "8",
                              "ts": "2020-03-06 11:53:43",
                              "score": "75",
                              "created_at": "05:23"
                          }
                      },
                      "name": "d4rkc0de",
                      "score": 390,
                      "time": 11084383026
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:50:45",
                              "score": "35",
                              "created_at": "02:20"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 09:07:45",
                              "score": "40",
                              "created_at": "02:37"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2020-03-06 09:27:21",
                              "score": "50",
                              "created_at": "02:57"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2020-03-06 09:36:14",
                              "score": "55",
                              "created_at": "03:06"
                          },
                          "6": {
                              "pid": "6",
                              "ts": "2020-03-06 10:39:03",
                              "score": "65",
                              "created_at": "04:09"
                          },
                          "7": {
                              "pid": "7",
                              "ts": "2020-03-06 10:17:27",
                              "score": "70",
                              "created_at": "03:47"
                          },
                          "8": {
                              "pid": "8",
                              "ts": "2020-03-06 11:41:47",
                              "score": "75",
                              "created_at": "05:11"
                          }
                      },
                      "name": "InsHack@ti",
                      "score": 390,
                      "time": 11084395222
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:02:58",
                              "score": "35",
                              "created_at": "01:32"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 08:12:17",
                              "score": "40",
                              "created_at": "01:42"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2020-03-06 08:25:32",
                              "score": "50",
                              "created_at": "01:55"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2020-03-06 11:21:39",
                              "score": "55",
                              "created_at": "04:51"
                          },
                          "6": {
                              "pid": "6",
                              "ts": "2020-03-06 10:42:29",
                              "score": "65",
                              "created_at": "04:12"
                          },
                          "7": {
                              "pid": "7",
                              "ts": "2020-03-06 11:09:58",
                              "score": "70",
                              "created_at": "04:39"
                          }
                      },
                      "name": "r3V3r$3r",
                      "score": 315,
                      "time": 9500903693
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 11:03:52",
                              "score": "35",
                              "created_at": "04:33"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 11:02:49",
                              "score": "40",
                              "created_at": "04:32"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2020-03-06 11:03:00",
                              "score": "50",
                              "created_at": "04:33"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2020-03-06 11:29:40",
                              "score": "55",
                              "created_at": "04:59"
                          },
                          "6": {
                              "pid": "6",
                              "ts": "2020-03-06 11:03:14",
                              "score": "65",
                              "created_at": "04:33"
                          },
                          "7": {
                              "pid": "7",
                              "ts": "2020-03-06 11:12:12",
                              "score": "70",
                              "created_at": "04:42"
                          }
                      },
                      "name": "ByamB4",
                      "score": 315,
                      "time": 9500936087
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:08:38",
                              "score": "35",
                              "created_at": "01:38"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 08:11:31",
                              "score": "40",
                              "created_at": "01:41"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2020-03-06 09:20:09",
                              "score": "50",
                              "created_at": "02:50"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2020-03-06 08:18:07",
                              "score": "55",
                              "created_at": "01:48"
                          },
                          "7": {
                              "pid": "7",
                              "ts": "2020-03-06 09:50:48",
                              "score": "70",
                              "created_at": "03:20"
                          }
                      },
                      "name": "WCSC",
                      "score": 250,
                      "time": 7917403753
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:34:08",
                              "score": "35",
                              "created_at": "02:04"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 08:34:21",
                              "score": "40",
                              "created_at": "02:04"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2020-03-06 09:39:18",
                              "score": "50",
                              "created_at": "03:09"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2020-03-06 09:06:10",
                              "score": "55",
                              "created_at": "02:36"
                          },
                          "6": {
                              "pid": "6",
                              "ts": "2020-03-06 09:18:40",
                              "score": "65",
                              "created_at": "02:48"
                          }
                      },
                      "name": "k0kos",
                      "score": 245,
                      "time": 7917408757
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:06:00",
                              "score": "35",
                              "created_at": "01:36"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 08:25:28",
                              "score": "40",
                              "created_at": "01:55"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2020-03-06 08:07:19",
                              "score": "50",
                              "created_at": "01:37"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2020-03-06 08:51:25",
                              "score": "55",
                              "created_at": "02:21"
                          }
                      },
                      "name": "darkoob",
                      "score": 180,
                      "time": 6333917412
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:13:05",
                              "score": "35",
                              "created_at": "01:43"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 11:52:16",
                              "score": "40",
                              "created_at": "05:22"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2020-03-06 09:10:00",
                              "score": "50",
                              "created_at": "02:40"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2020-03-06 09:31:17",
                              "score": "55",
                              "created_at": "03:01"
                          }
                      },
                      "name": "APA Razi",
                      "score": 180,
                      "time": 6333936398
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:33:06",
                              "score": "35",
                              "created_at": "02:03"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 11:21:30",
                              "score": "40",
                              "created_at": "04:51"
                          },
                          "7": {
                              "pid": "7",
                              "ts": "2020-03-06 11:07:07",
                              "score": "70",
                              "created_at": "04:37"
                          }
                      },
                      "name": "acdwas",
                      "score": 145,
                      "time": 4750459303
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 11:54:02",
                              "score": "35",
                              "created_at": "05:24"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 10:30:18",
                              "score": "40",
                              "created_at": "04:00"
                          },
                          "7": {
                              "pid": "7",
                              "ts": "2020-03-06 11:44:49",
                              "score": "70",
                              "created_at": "05:14"
                          }
                      },
                      "name": "GARID LUCID",
                      "score": 145,
                      "time": 4750470549
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:39:56",
                              "score": "35",
                              "created_at": "02:09"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 09:36:53",
                              "score": "40",
                              "created_at": "03:06"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2020-03-06 08:56:33",
                              "score": "55",
                              "created_at": "02:26"
                          }
                      },
                      "name": "ByteForc3",
                      "score": 130,
                      "time": 4750445602
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 09:26:57",
                              "score": "35",
                              "created_at": "02:56"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 11:25:50",
                              "score": "40",
                              "created_at": "04:55"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2020-03-06 10:27:59",
                              "score": "55",
                              "created_at": "03:57"
                          }
                      },
                      "name": "lesbeans_",
                      "score": 130,
                      "time": 4750460446
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:07:26",
                              "score": "35",
                              "created_at": "01:37"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 08:16:18",
                              "score": "40",
                              "created_at": "01:46"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2020-03-06 08:21:38",
                              "score": "50",
                              "created_at": "01:51"
                          }
                      },
                      "name": "l0r3m1psum",
                      "score": 125,
                      "time": 4750436722
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:07:21",
                              "score": "35",
                              "created_at": "01:37"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 09:36:11",
                              "score": "40",
                              "created_at": "03:06"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2020-03-06 10:16:44",
                              "score": "50",
                              "created_at": "03:46"
                          }
                      },
                      "name": "4to3",
                      "score": 125,
                      "time": 4750448416
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:50:49",
                              "score": "35",
                              "created_at": "02:20"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 09:09:34",
                              "score": "40",
                              "created_at": "02:39"
                          },
                          "3": {
                              "pid": "3",
                              "ts": "2020-03-06 10:33:55",
                              "score": "50",
                              "created_at": "04:03"
                          }
                      },
                      "name": "h4ck7u5 ",
                      "score": 125,
                      "time": 4750450458
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:06:56",
                              "score": "35",
                              "created_at": "01:36"
                          },
                          "4": {
                              "pid": "4",
                              "ts": "2020-03-06 09:03:34",
                              "score": "55",
                              "created_at": "02:33"
                          }
                      },
                      "name": "Servant's Sons",
                      "score": 90,
                      "time": 3166960230
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:02:37",
                              "score": "35",
                              "created_at": "01:32"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 08:21:57",
                              "score": "40",
                              "created_at": "01:51"
                          }
                      },
                      "name": "ahengers",
                      "score": 75,
                      "time": 3166957474
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:51:39",
                              "score": "35",
                              "created_at": "02:21"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 08:59:17",
                              "score": "40",
                              "created_at": "02:29"
                          }
                      },
                      "name": "ITI-Tigers",
                      "score": 75,
                      "time": 3166962656
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 09:10:42",
                              "score": "35",
                              "created_at": "02:40"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 11:17:14",
                              "score": "40",
                              "created_at": "04:47"
                          }
                      },
                      "name": "noobmasters",
                      "score": 75,
                      "time": 3166972076
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 11:02:23",
                              "score": "35",
                              "created_at": "04:32"
                          },
                          "2": {
                              "pid": "2",
                              "ts": "2020-03-06 10:56:19",
                              "score": "40",
                              "created_at": "04:26"
                          }
                      },
                      "name": "splitline",
                      "score": 75,
                      "time": 3166977522
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:11:01",
                              "score": "35",
                              "created_at": "01:41"
                          }
                      },
                      "name": "stankc",
                      "score": 35,
                      "time": 1583478661
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:12:04",
                              "score": "35",
                              "created_at": "01:42"
                          }
                      },
                      "name": "cpls",
                      "score": 35,
                      "time": 1583478724
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:20:06",
                              "score": "35",
                              "created_at": "01:50"
                          }
                      },
                      "name": "undefined",
                      "score": 35,
                      "time": 1583479206
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 08:32:09",
                              "score": "35",
                              "created_at": "02:02"
                          }
                      },
                      "name": "DaVinciCode",
                      "score": 35,
                      "time": 1583479929
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 09:43:36",
                              "score": "35",
                              "created_at": "03:13"
                          }
                      },
                      "name": "Newbie_aaa",
                      "score": 35,
                      "time": 1583484216
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 09:55:58",
                              "score": "35",
                              "created_at": "03:25"
                          }
                      },
                      "name": "ub",
                      "score": 35,
                      "time": 1583484958
                  },
                  {
                      "taskStats": {
                          "1": {
                              "pid": "1",
                              "ts": "2020-03-06 11:55:38",
                              "score": "35",
                              "created_at": "05:25"
                          }
                      },
                      "name": "NoHat",
                      "score": 35,
                      "time": 1583492138
                  },
                  {
                      "taskStats": [],
                      "name": "dave",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Samurai",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Your_mirror",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "team_Aim",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Coala",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "3scava1i3r",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "jamiryo",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "NorthWest",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "CyberYoddha",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "GhostOfSparta",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "IAM",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "H0j3n",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "hack@unhcfreg",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "RohanVK",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Real",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "拉拉队",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "C-Miracle",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "73mb_sec",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "taurus",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "dwm2",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "不知道",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Cyber Grizzlies",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Cyber Grizzly",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "tuz",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "swt02026",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Team bounters",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Definitely not a team",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "whitehathacker",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "_ozap",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "rekcustq",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "RocketTeam",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Hus@r1@",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "T0X1Cx",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "HTsP Junior",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "BowsersCastle",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Lorem Ipsum",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "No_team",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "starPt",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "darK_Knight",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "PHPHooligans",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "N0n4mesbl",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "n00btotal",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "XxX",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "[Insert_Team_Name_Here]",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "not_3ag11a",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "3g1c3",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "malahu",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "bromigos",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "arrakis",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "SP0TL1GHT",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Hellhero",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "icebreak",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "kasiatutej",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "delta_echo",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "tmthy.jnes",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "|l|-_-\\\\\\",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "dang_xin",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Cyber Doggos",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "whitedevil",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Iam9r00t",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Cyber Ninja",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "The_unstoppable",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "0xN1ghtRa1d",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "n0obT3aM",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Colle",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "DarkEnigma",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "meAndme",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "manitorpotterk",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "rycbar",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "vCPU-to-pCPU Ratio",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "Surprise_Mother_Hackers",
                      "score": 0,
                      "time": 0
                  },
                  {
                      "taskStats": [],
                      "name": "TI_98",
                      "score": 0,
                      "time": 0
                  }
              ]
          },
          "created_at": null,
          "updated_at": null,
          "no": 4
      },
      "4": {
          "id": 4,
          "name": "BauCTF Summer 2021",
          "type": "Online",
          "format": "Jeopardy",
          "open": "0",
          "record": "0",
          "start": "Sat, 21-Aug-2021 19:30 UTC",
          "end": "Sat, 21-Aug-2021 23:30 UTC",
          "max_score": "500",
          "min_score": "200",
          "no_c": "6",
          "scoreboard": {
              "challenges": {
                  "20": {
                      "id": "20",
                      "title": "Bin0x0C",
                      "total": "2",
                      "score": 50
                  },
                  "21": {
                      "id": "21",
                      "title": "Cookie-00",
                      "total": "0",
                      "score": 100
                  },
                  "23": {
                      "id": "23",
                      "title": "pseudoDrag0n",
                      "total": "0",
                      "score": 150
                  },
                  "24": {
                      "id": "24",
                      "title": "Blind T3ster",
                      "total": "0",
                      "score": 300
                    },
                    "25": {
                        "id": "25",
                        "title": "Down The raB1t H0le",
                        "total": "0",
                        "score": 200
                    },
                    "26": {
                        "id": "26",
                        "title": "Plantium",
                        "total": "0",
                        "score": 200
                    },
              },
              "participants": [
                  {
                      "name": "2EZ",
                      "id": "29",
                      "score": 1000,
                      "time": 0,
                      "taskStats": {
                          "20": {
                              "id": "20",
                              "created_at": "00:11",
                              "u_id": "29"
                          },
                          "21": {
                            "id": "20",
                            "created_at": "00:32",
                            "u_id": "29"
                          },
                          "23": {
                            "id": "20",
                            "created_at": "01:47",
                            "u_id": "29"
                          },
                          "24": {
                            "id": "20",
                            "created_at": "03:16",
                            "u_id": "29"
                          },
                          "25": {
                            "id": "20",
                            "created_at": "03:56",
                            "u_id": "29"
                          },
                          "26": {
                            "id": "20",
                            "created_at": "02:02",
                            "u_id": "29"
                          }
                      }
                  },
                  {
                      "name": "D0ubleD1ce",
                      "id": "31",
                      "score": 700,
                      "time": 0,
                      "taskStats": {
                        "20": {
                            "id": "20",
                            "created_at": "00:23",
                            "u_id": "29"
                        },
                        "21": {
                          "id": "20",
                          "created_at": "01:42",
                          "u_id": "29"
                        },
                        "23": {
                          "id": "20",
                          "created_at": "02:21",
                          "u_id": "29"
                        },
                        "25": {
                          "id": "20",
                          "created_at": "03:09",
                          "u_id": "29"
                        },
                        "26": {
                          "id": "20",
                          "created_at": "03:47",
                          "u_id": "29"
                        }
                      }
                  },
                  {
                      "name": "M00N",
                      "id": "28",
                      "score": 700,
                      "time": 0,
                      "taskStats": {
                        "20": {
                            "id": "20",
                            "created_at": "00:30",
                            "u_id": "29"
                        },
                        "21": {
                          "id": "20",
                          "created_at": "01:40",
                          "u_id": "29"
                        },
                        "23": {
                          "id": "20",
                          "created_at": "02:30",
                          "u_id": "29"
                        },
                        "25": {
                          "id": "20",
                          "created_at": "03:57",
                          "u_id": "29"
                        },
                        "26": {
                          "id": "20",
                          "created_at": "02:53",
                          "u_id": "29"
                        }
                      }
                  },
                  {
                    "name": "12angrymen",
                    "id": "28",
                    "score": 700,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "00:33",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "01:56",
                        "u_id": "29"
                      },
                      "23": {
                        "id": "20",
                        "created_at": "02:37",
                        "u_id": "29"
                      },
                      "25": {
                        "id": "20",
                        "created_at": "03:55",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:17",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "ID426",
                    "id": "28",
                    "score": 500,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "00:24",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "01:58",
                        "u_id": "29"
                      },
                      "23": {
                        "id": "20",
                        "created_at": "02:44",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:29",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "Kurwa",
                    "id": "28",
                    "score": 500,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "00:42",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "02:18",
                        "u_id": "29"
                      },
                      "23": {
                        "id": "20",
                        "created_at": "02:49",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:57",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "CYBER_B@B3",
                    "id": "28",
                    "score": 500,
                    "time": 0,
                    "taskStats": {
                      "21": {
                        "id": "20",
                        "created_at": "00:47",
                        "u_id": "29"
                      },
                      "25": {
                        "id": "20",
                        "created_at": "01:27",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:02",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "SANTA",
                    "id": "28",
                    "score": 500,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "00:50",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "01:33",
                        "u_id": "29"
                      },
                      "23": {
                        "id": "20",
                        "created_at": "02:08",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:11",
                        "u_id": "29"
                      }
                    }
                },{
                    "name": "5H4D0W",
                    "id": "28",
                    "score": 500,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "00:51",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "01:38",
                        "u_id": "29"
                      },
                      "23": {
                        "id": "20",
                        "created_at": "02:20",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:27",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "Hidden-File",
                    "id": "28",
                    "score": 500,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "00:57",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "01:49",
                        "u_id": "29"
                      },
                      "23": {
                        "id": "20",
                        "created_at": "02:24",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:38",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "Tokyo Girls",
                    "id": "28",
                    "score": 500,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "01:09",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "01:56",
                        "u_id": "29"
                      },
                      "23": {
                        "id": "20",
                        "created_at": "02:45",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:52",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "12angrymen",
                    "id": "28",
                    "score": 450,
                    "time": 0,
                    "taskStats": {
                      "21": {
                        "id": "20",
                        "created_at": "00:48",
                        "u_id": "29"
                      },
                      "23": {
                        "id": "20",
                        "created_at": "02:33",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:48",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "test124",
                    "id": "28",
                    "score": 400,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "00:39",
                          "u_id": "29"
                      },
                      "23": {
                        "id": "20",
                        "created_at": "01:50",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:01",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "FlowUnderflow",
                    "id": "28",
                    "score": 400,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "00:39",
                          "u_id": "29"
                      },
                      "23": {
                        "id": "20",
                        "created_at": "01:45",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:51",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "Mr. TV",
                    "id": "28",
                    "score": 400,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "00:40",
                          "u_id": "29"
                      },
                      "23": {
                        "id": "20",
                        "created_at": "00:56",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:23",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "Pandas",
                    "id": "28",
                    "score": 400,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "00:39",
                          "u_id": "29"
                      },
                      "23": {
                        "id": "20",
                        "created_at": "01:45",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:51",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "T0rnad0",
                    "id": "28",
                    "score": 400,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "00:50",
                          "u_id": "29"
                      },
                      "23": {
                        "id": "20",
                        "created_at": "01:42",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:49",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "Hacker Honey",
                    "id": "28",
                    "score": 400,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "01:09",
                          "u_id": "29"
                      },
                      "23": {
                        "id": "20",
                        "created_at": "02:23",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:45",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "angry_tigers",
                    "id": "28",
                    "score": 400,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "01:41",
                          "u_id": "29"
                      },
                      "23": {
                        "id": "20",
                        "created_at": "02:33",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:57",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "Jinux",
                    "id": "28",
                    "score": 400,
                    "time": 0,
                    "taskStats": {
                      "25": {
                        "id": "20",
                        "created_at": "02:47",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:58",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "GreyMandey",
                    "id": "28",
                    "score": 350,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "00:23",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "01:32",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:28",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "Team 69",
                    "id": "28",
                    "score": 350,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "00:43",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "01:55",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:31",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "Uncle Cl0wn",
                    "id": "28",
                    "score": 350,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "00:56",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "02:40",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:50",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "BlackBoxxx",
                    "id": "28",
                    "score": 300,
                    "time": 0,
                    "taskStats": {
                      "21": {
                        "id": "20",
                        "created_at": "01:32",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "02:40",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "uckctf",
                    "id": "28",
                    "score": 300,
                    "time": 0,
                    "taskStats": {
                      "21": {
                        "id": "20",
                        "created_at": "01:38",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "02:58",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "Phantom",
                    "id": "28",
                    "score": 300,
                    "time": 0,
                    "taskStats": {
                      "21": {
                        "id": "20",
                        "created_at": "02:10",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:27",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "Numero7",
                    "id": "28",
                    "score": 300,
                    "time": 0,
                    "taskStats": {
                      "21": {
                        "id": "20",
                        "created_at": "02:13",
                        "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:33",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "secure TiTan",
                    "id": "28",
                    "score": 250,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "01:01",
                          "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:20",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "Boomers",
                    "id": "28",
                    "score": 250,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "01:47",
                          "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:28",
                        "u_id": "29"
                      },
                      
                    }
                },
                {
                    "name": "HelloWorlddd",
                    "id": "28",
                    "score": 250,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "02:09",
                          "u_id": "29"
                      },
                      "26": {
                        "id": "20",
                        "created_at": "03:52",
                        "u_id": "29"
                      },
                      
                    }
                },
                {
                    "name": "1x1",
                    "id": "28",
                    "score": 200,
                    "time": 0,
                    "taskStats": {
                      "26": {
                        "id": "20",
                        "created_at": "03:21",
                        "u_id": "29"
                      },
                      
                    }
                },
                {
                    "name": "scrptict",
                    "id": "28",
                    "score": 200,
                    "time": 0,
                    "taskStats": {
                      "26": {
                        "id": "20",
                        "created_at": "03:34",
                        "u_id": "29"
                      },
                      
                    }
                },
                {
                    "name": "Static Void",
                    "id": "28",
                    "score": 150,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "00:09",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "00:32",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "Ms. Pirate",
                    "id": "28",
                    "score": 150,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "00:12",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "01:22",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "VHDL",
                    "id": "28",
                    "score": 150,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "00:19",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "01:28",
                        "u_id": "29"
                      }
                    }
                },
                {
                    "name": "Z3R0",
                    "id": "28",
                    "score": 150,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "00:22",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "01:34",
                        "u_id": "29"
                      },
                    }
                },
                {
                    "name": "CatNet",
                    "id": "28",
                    "score": 150,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "00:39",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "01:55",
                        "u_id": "29"
                      },
                    }
                },
                {
                    "name": "n00bs",
                    "id": "28",
                    "score": 150,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "01:02",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "02:11",
                        "u_id": "29"
                      },
                    }
                },
                {
                    "name": "root.txt",
                    "id": "28",
                    "score": 150,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "01:36",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "02:29",
                        "u_id": "29"
                      },
                    }
                },
                {
                    "name": "voiden",
                    "id": "28",
                    "score": 150,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "01:45",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "02:53",
                        "u_id": "29"
                      },                      
                    }
                },
                {
                    "name": "FL4G",
                    "id": "28",
                    "score": 150,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "01:49",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "02:52",
                        "u_id": "29"
                      },
                      
                    }
                },
                {
                    "name": "123password456",
                    "id": "28",
                    "score": 150,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "01:54",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "03:10",
                        "u_id": "29"
                      },
                      
                    }
                },
                {
                    "name": "Eskobar",
                    "id": "28",
                    "score": 150,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "02:20",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "03:32",
                        "u_id": "29"
                      },
                    }
                },
                {
                    "name": "Vampires",
                    "id": "28",
                    "score": 150,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "02:42",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "03:40",
                        "u_id": "29"
                      },
                    }
                },
                {
                    "name": "qwerty_yui",
                    "id": "28",
                    "score": 150,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "02:59",
                          "u_id": "29"
                      },
                      "21": {
                        "id": "20",
                        "created_at": "03:41",
                        "u_id": "29"
                      },
                    }
                },
                {
                    "name": "$udo",
                    "id": "28",
                    "score": 100,
                    "time": 0,
                    "taskStats": {
                      "21": {
                        "id": "20",
                        "created_at": "01:17",
                        "u_id": "29"
                      },
                    }
                },
                {
                    "name": "Blurrry",
                    "id": "28",
                    "score": 100,
                    "time": 0,
                    "taskStats": {
                      "21": {
                        "id": "20",
                        "created_at": "02:02",
                        "u_id": "29"
                      },
                    }
                },
                {
                    "name": "or4nge",
                    "id": "28",
                    "score": 100,
                    "time": 0,
                    "taskStats": {
                      "21": {
                        "id": "20",
                        "created_at": "02:27",
                        "u_id": "29"
                      },
                    }
                },
                {
                    "name": "p1nk",
                    "id": "28",
                    "score": 100,
                    "time": 0,
                    "taskStats": {
                      "21": {
                        "id": "20",
                        "created_at": "03:11",
                        "u_id": "29"
                      },
                    }
                },
                {
                    "name": "侍",
                    "id": "28",
                    "score": 100,
                    "time": 0,
                    "taskStats": {
                      "21": {
                        "id": "20",
                        "created_at": "03:34",
                        "u_id": "29"
                      },
                    }
                },
                {
                    "name": "Tea For Three",
                    "id": "28",
                    "score": 50,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "01:43",
                          "u_id": "29"
                      },
                    }
                },
                {
                    "name": "Lapodo",
                    "id": "28",
                    "score": 50,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "02:21",
                          "u_id": "29"
                      },
                    }
                },
                {
                    "name": "l0r3m1psum",
                    "id": "28",
                    "score": 50,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "02:39",
                          "u_id": "29"
                      },
                    }
                },
                {
                    "name": "Matr1x",
                    "id": "28",
                    "score": 50,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "03:09",
                          "u_id": "29"
                      },
                    }
                },
                {
                    "name": "MMMM",
                    "id": "28",
                    "score": 50,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "03:11",
                          "u_id": "29"
                      },
                    }
                },
                {
                    "name": "private",
                    "id": "28",
                    "score": 50,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "03:29",
                          "u_id": "29"
                      },
                    }
                },
                {
                    "name": "Luigi",
                    "id": "28",
                    "score": 50,
                    "time": 0,
                    "taskStats": {
                      "20": {
                          "id": "20",
                          "created_at": "03:41",
                          "u_id": "29"
                      },
                    }
                },
                
                {
                    "taskStats": [],
                    "name": "tmthy.jnes",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "|l|-_-\\\\\\",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "dang_xin",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "Cyber Doggos",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "whitedevil",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "Iam9r00t",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "Cyber Ninja",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "The_unstoppable",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "0xN1ghtRa1d",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "n0obT3aM",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "Colle",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "DarkEnigma",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "meAndme",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "manitorpotterk",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "rycbar",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "vCPU-to-pCPU Ratio",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "Surprise_Mother_Hackers",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "TI_98",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "Mind Map Orbs",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "Hackers",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "AAAAAA",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "PS",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "Newbies",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "Hive Mind",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "آقای شریفی",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "راز",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "آراد",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "AmMa",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "vip3r",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "پاستیلامون بو وایتکس میده",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "lebensmüde",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "Jack",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "o_O",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "KhubayeHack",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "تامیلا",
                    "score": 0,
                    "time": 0
                },
                {
                    "taskStats": [],
                    "name": "esrever",
                    "score": 0,
                    "time": 0
                },

              ]
          },
          "created_at": null,
          "updated_at": null,
          "no": 4
      }
  },
    challenges: [],
    leaderboard: [],
    submissions: [],
    events: [],
    category_names: ["WEB", "REV", "CRYP", "PWN", "MISC"],
    categories: {}
  },
  getters: {
    signedIn(state) {
      return state.signedIn;
    },
    scoreboard(state) {
      return state.scoreboard_data;
    },
    challenges(state) {
      return state.challenges;
    },
    latestEvent(state) {
      return state.latestEvent;
    },
    events(state) {
      return state.events;
    },
    category_names(state) {
      return state.category_names;
    },
    categories(state) {
      return state.categories;
    },
    leaderboard(state) {
      return state.leaderboard;
    },
    user(state) {
      return state.user;
    },
    submissions(state) {
      return state.submissions;
    }
  },
  mutations: {
    darkMode(state, status) {
      state.dark = status;
    },
    signInStatus(state, status) {
      state.signedIn = status;
    },
    latestEvent(state, status) {
      state.latestEvent = status;
    },
    scoreboard(state, event) {
      function compare(a, b) {
        if (a.score > b.score) return -1;
        if (b.score > a.score) return 1;
        if (a.time > b.time) return 1;
        if (a.time < b.time) return -1;
        return 0;
      }
      event.scoreboard.participants = Object.values(
        event.scoreboard.participants
      ).sort(compare);
      Vue.set(state.scoreboards, event.id, event);
    },
    challenges(state, challenges) {
      state.challenges = challenges;
    },
    categories(state, challenges) {
      Vue.set(state.categories, challenges.cat, challenges.data);
    },
    events(state, events) {
      events.forEach(e => {
        var end = moment.utc(e.end, "ddd, D-MMM-YYYY HH:mm");
        let now = moment().toDate();
        e.disabled = now > end ? 1 : 0;
      });
      state.events = events;
    },
    leaderboard(state, leaderboard) {
      state.leaderboard = leaderboard;
    },
    user(state, user) {
      state.user = user;
    },
    submissions(state, submissions) {
      submissions.forEach(e => {
        e.created_at = moment.unix(e.created_at).fromNow();
      });
      state.submissions = submissions;
    }
  },
  actions: {
    ...login_actions,
    ...score_actions,
    ...event_actions,
    ...challenge_actions,
    user({ commit }) {
      axios
        .get(USER, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + myLocalLocalsotarge(0, "token")
          }
        })
        .then(res => {
          if (res.data) {
            commit("user", res.data);
          }
        })
        .catch(err => {
          if (err.response) return alert(err.response.data.error);
          return alert(err);
        });
    }
  }
});
