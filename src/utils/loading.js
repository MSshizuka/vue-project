// 实现loading效果
import Loading from '@/components/Loading.vue';

const loadable = (asyncFn) => {
  const component = () => ({
    component: asyncFn(),
    loading: Loading,
  });

  // 最终返回一个组件 通过render渲染异步组件
  return {// cli默认不支持模板
    render(h) {
      return h(component);
    },
  };
};
export default loadable;
