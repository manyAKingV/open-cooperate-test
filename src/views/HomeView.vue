<template>
    <div id="app">
        <!-- 导航栏 -->
        <a-layout-header>
            <div class="logo">
                <img src="@/assets/logo.png" alt="Company Logo">
            </div>
        </a-layout-header>
        <!-- 内容区域 -->
        <a-layout-content class="content-container">
            <div class="tech-layer">
                <div class="section-title">应用层</div>
                <div class="ai-framework">
                    <div class="ai-frameworks">
                    <h3 class="sub-title">智能城市</h3>
                    <div class="grid-container">
                        <div class="grid-item" v-for="(img, index) in 6" :key="index">
                            <img :src="'/static/icon/pytorch.png'" alt="智能城市" class="tech-img" />
                        </div>
                    </div>
                    </div>
                    <div class="ai-frameworks">
                        <h3 class="sub-title">智能交通</h3>
                        <div class="grid-container">
                            <div class="grid-item" v-for="(img, index) in 6" :key="index">
                                <img :src="`/static/icon/pytorch.png`" alt="智能交通" class="tech-img" />
                            </div>
                        </div>
                    </div>
                    <div class="ai-frameworks">
                        <h3 class="sub-title">智慧物流</h3>
                        <div class="grid-container">
                            <div class="grid-item" v-for="(img, index) in 6" :key="index">
                                <img :src="`/static/icon/pytorch.png`" alt="智慧物流" class="tech-img" />
                            </div>
                        </div>
                    </div>
                    <div class="ai-frameworks">
                        <h3 class="sub-title">智慧物流2</h3>
                        <div class="grid-container">
                            <div class="grid-item" v-for="(img, index) in 6" :key="index">
                                <img :src="`/static/icon/pytorch.png`" alt="智慧物流2" class="tech-img" />
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
            <div class="tech-layer">
                <div class="section-title">服务层</div>
                <div class="ai-frameworks">
                    <h3 class="sub-title">AI框架、工具和库</h3>
                    <div class="grid-container">
                        <div class="grid-item" v-for="(img, index) in 6" :key="index">
                            <img :src="`/static/icon/pytorch.png`" alt="AI工具" class="tech-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="tech-layer">
                <div class="section-title">技术层</div>
                <div class="ai-frameworks">
                    <h3 class="sub-title">AI框架、工具和库</h3>
                    <div class="grid-container">
                        <div class="grid-item" v-for="(img, index) in 6" :key="index">
                            <img :src="`/static/icon/pytorch.png`" alt="AI工具" class="tech-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="tech-layer">
                <div class="section-title">基础设施</div>
                <div class="ai-frameworks">
                    <h3 class="sub-title">AI框架、工具和库</h3>
                    <div class="grid-container">
                        <div class="grid-item" v-for="(img, index) in 6" :key="index">
                            <img :src="`/static/icon/pytorch.png`" alt="AI工具" class="tech-img" />
                        </div>
                    </div>
                </div>
            </div>
        </a-layout-content>
    </div>
</template>
  
<script>
import { exportToPDF } from "@/utils/pdfExport";



export default {
    name: 'App',
    data() {
        return {
        
        };
    },

    beforeMount(){

    },
    async mounted(){
        
    },

    methods: {
        // 导出pdf功能
        async handleExport(){
            // 输入div的class 和 导出的名称
            exportToPDF('app','landscape.pdf')
        },

    }
};
</script>

<style scoped>
#app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #3e3e3f;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.content-container {
    padding: 50px;
    background-color: #f5f5f5;
}

.tech-layer {
    display: flex;
    border: 2px solid #1890ff; /* Ant Design主题蓝色边框 */
    border-radius: 8px;
    background: #f0f9ff; /* 浅蓝色背景 */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 阴影增强层次感 */
    margin: 1%;
}

.section-title {
  color: #1890ff;
  margin-bottom: 16px;
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}

.ai-framework {
    display: flex;
    flex-wrap: wrap;
}

.ai-frameworks {
  border: 1px dashed #69c0ff; /* 虚线边框区分层级 */
  border-radius: 6px;
  width: 30%;
  padding: 0.5%;
  margin-top: 0.5%;
  margin-bottom: 0.5%;
  margin-left: 10px;
  background: white;
}

.sub-title {
  color: #595959;
  margin-bottom: 12px;
  font-size: 16px;
}
.grid-container {
  display: flex;
  flex-wrap: nowrap;
}

.grid-item {
  text-align: center;
  padding: 8px;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  transition: transform 0.2s; /* 悬停动画 */
}

.grid-item:hover {
  transform: translateY(-4px);
}

.tech-img {
  width: 100%;
  object-fit: contain; /* 保持图片比例 */
}

</style>    