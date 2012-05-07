var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":120,"id":1704,"methods":[{"el":23,"sc":2,"sl":18},{"el":58,"sc":2,"sl":25},{"el":87,"sc":2,"sl":72},{"el":97,"sc":2,"sl":94},{"el":107,"sc":2,"sl":104},{"el":118,"sc":2,"sl":114}],"name":"WriteBack","sl":13}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_17":{"methods":[{"sl":18},{"sl":25}],"name":"ALUListProcessesCorrectly","pass":true,"statements":[{"sl":20},{"sl":21},{"sl":22},{"sl":26},{"sl":29},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":36},{"sl":37},{"sl":39},{"sl":44},{"sl":57}]},"test_2":{"methods":[{"sl":18},{"sl":25},{"sl":72},{"sl":94}],"name":"EncodeTest","pass":true,"statements":[{"sl":20},{"sl":21},{"sl":22},{"sl":26},{"sl":29},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":36},{"sl":37},{"sl":39},{"sl":44},{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":51},{"sl":52},{"sl":54},{"sl":57},{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":81},{"sl":82},{"sl":83},{"sl":86},{"sl":96}]},"test_20":{"methods":[{"sl":18},{"sl":25}],"name":"MemoryAccessProcessesCorrectly","pass":true,"statements":[{"sl":20},{"sl":21},{"sl":22},{"sl":26},{"sl":29},{"sl":31},{"sl":44},{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":51},{"sl":52},{"sl":54},{"sl":57}]},"test_4":{"methods":[{"sl":18},{"sl":25},{"sl":72},{"sl":94}],"name":"DecodeTest","pass":true,"statements":[{"sl":20},{"sl":21},{"sl":22},{"sl":26},{"sl":29},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":36},{"sl":37},{"sl":39},{"sl":44},{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":51},{"sl":52},{"sl":54},{"sl":57},{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":81},{"sl":82},{"sl":83},{"sl":86},{"sl":96}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [17, 2, 20, 4], [], [17, 2, 20, 4], [17, 2, 20, 4], [17, 2, 20, 4], [], [], [17, 2, 20, 4], [17, 2, 20, 4], [], [], [17, 2, 20, 4], [], [17, 2, 20, 4], [17, 2, 4], [17, 2, 4], [17, 2, 4], [], [17, 2, 4], [17, 2, 4], [], [17, 2, 4], [], [], [], [], [17, 2, 20, 4], [], [2, 20, 4], [2, 20, 4], [2, 20, 4], [2, 20, 4], [], [2, 20, 4], [2, 20, 4], [], [2, 20, 4], [], [], [17, 2, 20, 4], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [2, 4], [], [2, 4], [2, 4], [2, 4], [2, 4], [], [], [], [2, 4], [2, 4], [2, 4], [], [], [2, 4], [], [], [], [], [], [], [], [2, 4], [], [2, 4], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]