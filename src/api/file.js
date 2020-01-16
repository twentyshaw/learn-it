import AV from '../helper/leancloud.js'
import { Message } from 'element-ui'

export default{
	saveAvatar(image){
        var avatar = new AV.File('avatar.jpg', image);
        var acl = new AV.ACL()
		acl.setPublicReadAccess(true)
		acl.setReadAccess(AV.User.current(),true)
		acl.setWriteAccess(AV.User.current(),true)
		avatar.setACL(acl)
        return avatar.save().then(function (file) {
            Message.success({
                message:'Your avatar was succesfully updated!',
                customClass:'message-popup'
            })
            console.log('文件保存完成。objectId：' + file.id);
            return file
        }, function (error) {
            // 保存失败，可能是文件无法被读取，或者上传过程中出现问题
        });
    },
    
    getAvatar(user){
        var query = new AV.Query('_File')
        query.equalTo('name', 'avatar.jpg')
        query.equalTo('metaData.owner', user)
		return query.find().then(function(avatar){
            var avaUrl = avatar[0]
            console.log("avaUrl")
            console.log(avaUrl)
			return avaUrl
		},function(){
			console.log('获取记录失败')
		})
    },
    
    deleteOldAva(id){
        console.log(id)
        var file = AV.File.createWithoutData(id);
        console.log(file)
        file.destroy();
    },

    setDefaultAva(){
        var avatar = AV.File.withURL('avatar.jpg', 'https://i.loli.net/2020/01/13/G93mNbHC56Psrke.jpg');
        var acl = new AV.ACL()
		acl.setPublicReadAccess(true)
		acl.setReadAccess(AV.User.current(),true)
		acl.setWriteAccess(AV.User.current(),true)
		avatar.setACL(acl)
        return avatar.save().then(function (file) {
            console.log('文件保存完成。objectId：' + file.id);
            return file
        }, function (error) {
            // 保存失败，可能是文件无法被读取，或者上传过程中出现问题
        });        
    }
}