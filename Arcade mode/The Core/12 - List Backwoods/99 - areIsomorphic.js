'use strict'
areIsomorphic = (a1, a2) => a1.length === a2.length && a1.every((x, i) => x.length === a2[i].length);