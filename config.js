/**
 * config.js.
 * User: raytin
 * Date: 13-12-29
 */

var configJson = {
    "cloud-environment": {
        name: '云开发环境',
        type: 1,
        describe: '这是一个注释文字',
        items: [
            {
                text: 'Nitrous.io',
                url: 'http://nitrous.io/',
                sign: true
            },
            {
                text: 'koding.com',
                url: 'http://koding.com/'
            }
        ]
    },
    "doc-api": {
        name: 'API文档',
        type: 2,
        items: [
            {
                text: 'Node.js API英文文档',
                url: 'http://nodejs.org/api/',
                sign: true
            },
            {
                text: 'Node.js API英文文档2',
                url: 'http://nodejs.org/api/'
            }
        ],
        subCategory: [
            {
                name: 'Node.js',
                items: [
                    {
                        text: 'Node.js API<span class="tip">中文</span>文档',
                        url: 'http://nodeapi.ucdok.com/api/all.html'
                    },
                    {
                        text: 'Node.js API英文文档',
                        url: 'http://nodejs.org/api/'
                    }
                ]
            },
            {
                name: 'Backbone.js',
                items: [
                    {
                        text: 'Backbone.js API<span class="tip">中文</span>文档',
                        url: 'http://www.csser.com/tools/backbone/backbone.js.html'
                    },
                    {
                        text: 'Backbone.js API英文文档',
                        url: 'http://backbonejs.org/'
                    }
                ]
            },
            {
                name: 'Underscore.js',
                items: [
                    {
                        text: 'Underscore.js API<span class="tip">中文</span>文档(1.4.2)',
                        url: 'http://www.css88.com/doc/underscore1.4.2/'
                    },
                    {
                        text: 'Underscore.js API英文文档',
                        url: 'http://underscorejs.org/'
                    }
                ]
            },
            {
                name: 'jQuery',
                items: [
                    {
                        text: 'jQuery API<span class="tip">1.8.0~1.8.3</span>中文文档',
                        url: 'http://www.pcxyz.com/'
                    },
                    {
                        text: 'jQuery API<span class="tip">1.0~1.9</span>中文文档',
                        url: 'http://www.css88.com/jqapi-1.9/'
                    },
                    {
                        text: 'jQuery API英文文档',
                        url: 'http://api.jquery.com/'
                    }
                ]
            },
            {
                name: 'Raphaël',
                items: [
                    {
                        text: 'Raphael API<span class="tip">中文</span>帮助文档',
                        url: 'http://julying.com/lab/raphael-js/docs/'
                    },
                    {
                        text: 'Raphael API参考文档',
                        url: 'http://raphaeljs.com/reference.html'
                    }
                ]
            }
        ]
    },
    "nodejs-host-free": {
        name: '免费的Node.js托管平台',
        type: 1,
        describe: '这是一个注释文字',
        items: [
            {
                text: 'Nitrous.io',
                url: 'http://nitrous.io/',
                sign: true
            },
            {
                text: 'koding.com',
                url: 'http://koding.com/'
            }
        ]
    },
    "online-editor": {
        name: '在线编辑器',
        type: 1,
        describe: '这是一个注释文字2',
        items: [
            {
                text: 'mahua.jser.me',
                url: 'http://mahua.jser.me/',
                sign: true
            },
            {
                text: 'koding.com',
                url: 'http://koding.com/'
            }
        ]
    },
    "front-end-tools": {
        name: '前端工具<em class="separate">|</em>Javascript',
        type: 2,
        describe: '这是一个注释文字2',
        subCategory: [
            {
                name: 'Javascript调试',
                items: [
                    {
                        text: 'Node.js API<span class="tip">中文</span>文档',
                        url: 'http://nodeapi.ucdok.com/api/all.html'
                    },
                    {
                        text: 'Node.js API英文文档',
                        url: 'http://nodejs.org/api/'
                    }
                ]
            }
        ]
    },
    "aids": {
        name: '辅助工具',
        type: 1,
        describe: '这是一个注释文字2',
        items: [
            {
                text: 'Json检验/格式化',
                url: 'http://www.bejson.com/'
            },
            {
                text: 'Javascript 压缩/加密/解密',
                url: 'http://koding.com/'
            }
        ]
    },
    "ide": {
        name: 'IDE',
        type: 1,
        describe: '这是一个注释文字2',
        items: [
            {
                text: 'Json检验/格式化',
                url: 'http://www.bejson.com/'
            }
        ]
    },
    "image-resources": {
        name: '图片资源',
        type: 1,
        describe: 'Icon图标搜索工具',
        items: [
            {
                text: 'Json检验/格式化',
                url: 'http://www.bejson.com/'
            }
        ]
    }
};
