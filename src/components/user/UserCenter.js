import React from 'react';

// 引入样式
import '../../assets/css/user/user.scss';

// 引入api接口地址
import api from '../../api/index.js';

// 引入ant-design
import { Icon, Divider, Tag, Tabs, Typography  } from 'antd';

const { TabPane } = Tabs;
const { Paragraph } = Typography;

class UserCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false, // 异步加载数据是否已完成
      articleList: [], // 文章列表
      applicationList: [], // 应用列表
      projectList: [], // 项目列表
    };
  }

  componentDidMount() {
    api.msg.getUserInfo().then((res) => {
      console.log(res.data);
      this.setState({
        loaded: true,
        articleList: res.data.articleList,
        applicationList: res.data.applicationList,
        projectList: res.data.projectList
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="usercenter-wraper">
        <section className="left-wrap">
          <div className="general-info">
            <img className="info-avatar" src={ require('../../assets/images/default_avatar.jpg') } alt="头像"/>
            <p className="info-nickname">Cookie Pool</p>
            <p className="info-motto">一切都是最好的安排！</p>
          </div>
          <div className="detail-info">
            <p className="info-title">
              <Icon type="account-book" style={ {fontSize: '16px', marginRight: '8px'} }/> 
              首席摸鱼工程师
            </p>
            <p className="info-department">
              <Icon type="apartment" style={ {fontSize: '16px', marginRight: '8px'} }/>
              鱼塘科技-XXXXXX事业群-XXXXXX平台部-XXXXXX技术部-Senior Catch Fish Engineer
            </p>
            <p className="info-location">
              <Icon type="environment" style={ {fontSize: '16px', marginRight: '8px'} }/>
              重庆市渝北区
            </p>
          </div>

          <Divider dashed></Divider>

          <div className="tag-info">
            <p className="info-label">标签</p>
            <div className="tag-box">
              <Tag color="magenta">喜欢Ha狗</Tag>
              <Tag color="purple">程序员</Tag>
              <Tag color="geekblue">二次元</Tag>
              <Tag color="lime" style={ {marginTop: '8px'} }>首席划水</Tag>
            </div>
          </div>

          <Divider dashed></Divider>

          <div className="team-info">
            <p className="info-label">团队</p>
            <Icon type="alipay-square" theme="filled" style={ {fontSize: '26px', marginRight: '16px'} }/>
            <Icon type="github" theme="filled" style={ {fontSize: '26px', marginRight: '16px'} }/>
            <Icon type="windows" theme="filled" style={ {fontSize: '26px', marginRight: '16px'} }/>
            <Icon type="instagram" theme="filled" style={ {fontSize: '26px', marginRight: '16px'} }/>
          </div>
        </section>
        <section className="right-wrap">
          <Tabs defaultActiveKey="1" size="large" tabBarStyle={{padding: '0 32px'}}>
            <TabPane tab={`文章（${this.state.articleList.length}）`} key="1">
              <div className="artical-wraper">
              {
                this.state.loaded && this.state.articleList.map((item, index) => {
                  return (
                    <div key={ index } className="item-detail">
                      <p className="detail-title">{ item.title }</p>
                      <div className="detail-tags-box">
                        <Tag>{ item.tags[0] }</Tag>
                        <Tag>{ item.tags[1] }</Tag>
                        <Tag>{ item.tags[2] }</Tag>
                      </div>
                      <Paragraph>{ item.content }</Paragraph>
                      <div className="detail-public flex-start-center">
                        <Icon type="github" theme="filled" style={ {fontSize: '26px', marginRight: '16px'} }/>
                        <span className="deepen-color">{ item.user }</span>发布在<span className="deepen-color">{ item.URL }</span>
                      </div>
                      <div className="detail-feedback">
                        <span className="feedback-box">
                          <Icon type="star" />
                          { item.collection }
                        </span>
                        <span className="feedback-box">
                          <Icon type="like" />
                          { item.commend }
                        </span>
                        <span className="feedback-box">
                          <Icon type="message" />
                          { item.message }
                        </span>
                      </div>
                    </div>
                  )
                })
              }
              </div>
            </TabPane>
            <TabPane tab="应用" key="2">
              Hello two
            </TabPane>
            <TabPane tab="项目" key="3">
              Hello three
            </TabPane>            
          </Tabs>  
        </section>
      </div>
    )
  }
}

export default UserCenter;