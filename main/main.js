//email��ַ��׺�������жϸ�����email�����Ƿ���ָ���ļ�����
module.exports = function main(email, suffixes) 
{
  //ȡ��email�ĺ�׺
  var suffix = email.split("@")[1];
  //�����������ϣ����Ҹú�׺�Ƿ�����ڸ����ļ�����
  for(var i = 0; i < suffixes.length; i++)
  {
	  if(suffixes[i] == suffix)
		  return true;
  }
  return false;
};
