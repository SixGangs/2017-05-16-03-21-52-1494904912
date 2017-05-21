//email地址后缀检测程序，判断给定的email程序是否在指定的集合中
module.exports = function main(email, suffixes) 
{
  //取出email的后缀
  var suffix = email.split("@")[1];
  //遍历给定集合，查找该后缀是否存在于给定的集合中
  for(var i = 0; i < suffixes.length; i++)
  {
	  if(suffixes[i] == suffix)
		  return true;
  }
  return false;
};
