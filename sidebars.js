// 
module.exports = {
  docs: [

    {
      type: 'category',
      label: '介绍',
      collapsible: true,
      collapsed: false,
      items: [
        '01whychoose',
        '02quickstart',
        '03whatis',

      ],
    },

    {
      type: 'category',
      label: '生产者',
      collapsible: true,
      collapsed: true,
      items: [
        '04concept1',
        '05message1',
        '06message2',
        '07message3',
        '08message4',
        '09message5',
        '10message6',
        

      ],
    },
    {
      type: 'category',
      label: '消费者',
      collapsible: true,
      collapsed: true,
      items: [
        '11concept2',
        '12push',
        '13pull',
        '14pop',

      ],
    },
    {
      type: 'category',
      label: '部署与运维',
      collapsible: true,
      collapsed: true,
      items: [
        '15deploy',
        '16admintool',
        '17Dashboard',
        '18Exporter',
        
        

      ],
    },
    {
      type: 'category',
      label: '最佳实践',
      collapsible: true,
      collapsed: true,
      items: [
        '19JVMOS',
        '20log',
        '21subscribe',
        '22FAQ',


      ],
    },
    {
      type: 'category',
      label: '参数配置',
      collapsible: true,
      collapsed: true,
      items: [
        '23local',
        '24server',


      ],
    },
    '25streams',
    '26Connnect',
    '27EventBridge',
    '28MQTT',
    {
      type: 'category',
      label: '贡献指南',
      collapsible: true,
      collapsed: true,
      items: [
        '29how-to-contribute',
        '30code-guidelines',
        '31pull-request',
        '32release-manual'


      ],
    },
  ],
};