let presetText =
  "@[toc](目录)\n" +
  "\n" +
  "---\n" +
  "\n" +
  "> # 辛弃疾\n" +
  "\n" +
  "> `辛弃疾` *（1140年5月28日－1207年10月3日）*，~~原字坦夫~~，后改字**幼安**，号**稼轩**。\n" +
  "\n" +
  "> 南宋<u>豪放派词人</u>、将领，有 ==“词中之龙”== 之称。\n" +
  "\n" +
  "> 与苏轼合称“苏辛”，与李清照并称“济南二安”。\n" +
  "\n" +
  "# 人物介绍\n" +
  "|人物生平|词文|历史评价|轶事典故|\n" +
  "|---|---|---|---|\n" +
  "|早年侠义|《水龙吟》|子之诗则未也；当以词名家|义斩义端|\n" +
  "|起义反金|《水调歌头》|大材小用古所叹，管仲萧何实流亚|名士相会|\n" +
  "|步入仕途|《去国帖》|辛弃疾知大义而归宋|哭祭朱熹|\n" +
  "|人生起落|《菩萨蛮》|君子观弃疾之事，不可谓宋无人矣||\n" +
  "|壮志未酬|《破阵子》|词至此亦足矣||\n" +
  "\n" +
  "\n" +
  "![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4757bd84d8b8477aad7f7ba5ccfe92f8~tplv-k3u1fbpfcp-watermark.image)" +
  "\n" +
  "# Code\n" +
  "```javascript\n" +
  "var sortArray = function(nums) { \n" +
  "  if (nums.length < 2) return nums;\n" +
  "    return sort(nums, 0, nums.length - 1);\n" +
  "  }\n" +
  "  const sort = (nums, start, end) => {\n" +
  "  const index = partition(nums, start, end);\n" +
  "  if (start < index - 1) sort(nums, start, index- 1);\n" +
  "  if (index < end) sort(nums, index, end);\n" +
  "  return nums;\n" +
  "}\n" +
  "const partition = (nums, l, r) => {\n" +
  "  const p = nums[l + ((r - l) >> 1)];\n" +
  "  while (l <= r) {\n" +
  "    while (nums[l] < p) l++;\n" +
  "    while (nums[r] > p) r--;\n" +
  "    if (l <= r) {\n" +
  "      [nums[l], nums[r]] = [nums[r], nums[l]];\n" +
  "      l++;\n" +
  "      r--;\n" +
  "    }\n" +
  "  }\n" +
  "  return l;\n" +
  "}\n" +
  "```\n" +
  "\n" +
  "# TODO\n" +
  "- [X] 基础工具栏\n" +
  "- [X] 样式美化\n" +
  "- [X] 快捷键\n" +
  "- [X] highlight 样式引用（*）\n" +
  "- [ ] 图片上传回调配置\n" +
  "- [ ] 图片粘贴上传\n" +
  "- [ ] 图片拖拽上传\n" +
  "- [ ] 同步滚动(暂时按滚动条高度计算**)\n";

export default presetText;
