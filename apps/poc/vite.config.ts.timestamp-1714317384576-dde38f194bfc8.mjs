// apps/poc/vite.config.ts
import { defineConfig } from "file:///C:/Users/zhiji/Documents/GitHub/fe-monorepo-poc/node_modules/.pnpm/vite@5.0.12_@types+node@18.16.9_sugarss@4.0.1_postcss@8.4.33__terser@5.30.4/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/zhiji/Documents/GitHub/fe-monorepo-poc/node_modules/.pnpm/@vitejs+plugin-react@4.2.0_vite@5.0.12_@types+node@18.16.9_sugarss@4.0.1_postcss@8.4.33__terser@5.30.4_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { nxViteTsPaths } from "file:///C:/Users/zhiji/Documents/GitHub/fe-monorepo-poc/node_modules/.pnpm/@nx+vite@17.3.1_@babel+traverse@7.24.1_@swc-node+register@1.6.8_@swc+core@1.3.107_@swc+helper_jy3kk3xcc4vbdyroelgctdlzjy/node_modules/@nx/vite/plugins/nx-tsconfig-paths.plugin.js";
import { visualizer } from "file:///C:/Users/zhiji/Documents/GitHub/fe-monorepo-poc/node_modules/.pnpm/rollup-plugin-visualizer@5.12.0_rollup@4.16.4/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var __vite_injected_original_dirname = "C:\\Users\\zhiji\\Documents\\GitHub\\fe-monorepo-poc\\apps\\poc";
var vite_config_default = defineConfig({
  root: __vite_injected_original_dirname,
  cacheDir: "../../node_modules/.vite/apps/poc",
  server: {
    port: 4200,
    host: "localhost"
  },
  preview: {
    port: 4300,
    host: "localhost"
  },
  plugins: [react(), nxViteTsPaths(), visualizer()],
  optimizeDeps: {
    include: [
      // '@fe-monorepo-poc/digital',
      // '@fe-monorepo-poc/store',
      // '@fe-monorepo-poc/search',
    ],
    force: true
    // on dev server start, do a force bundle
  },
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: "../../dist/apps/poc",
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true
    },
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          mantine: ["@mantine/core"],
          router: ["@tanstack/react-router"],
          zod: ["zod"]
        }
      }
    }
  },
  test: {
    globals: true,
    cache: {
      dir: "../../node_modules/.vitest"
    },
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: ["default"],
    coverage: {
      reportsDirectory: "../../coverage/apps/poc",
      provider: "v8"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYXBwcy9wb2Mvdml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx6aGlqaVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXGZlLW1vbm9yZXBvLXBvY1xcXFxhcHBzXFxcXHBvY1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcemhpamlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxmZS1tb25vcmVwby1wb2NcXFxcYXBwc1xcXFxwb2NcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3poaWppL0RvY3VtZW50cy9HaXRIdWIvZmUtbW9ub3JlcG8tcG9jL2FwcHMvcG9jL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9J3ZpdGVzdCcgLz5cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCB7IG54Vml0ZVRzUGF0aHMgfSBmcm9tICdAbngvdml0ZS9wbHVnaW5zL254LXRzY29uZmlnLXBhdGhzLnBsdWdpbic7XHJcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICByb290OiBfX2Rpcm5hbWUsXHJcbiAgY2FjaGVEaXI6ICcuLi8uLi9ub2RlX21vZHVsZXMvLnZpdGUvYXBwcy9wb2MnLFxyXG5cclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDQyMDAsXHJcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICB9LFxyXG5cclxuICBwcmV2aWV3OiB7XHJcbiAgICBwb3J0OiA0MzAwLFxyXG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgfSxcclxuXHJcbiAgcGx1Z2luczogW3JlYWN0KCksIG54Vml0ZVRzUGF0aHMoKSwgdmlzdWFsaXplcigpXSxcclxuXHJcbiAgb3B0aW1pemVEZXBzOiB7XHJcbiAgICBpbmNsdWRlOiBbXHJcbiAgICAgIC8vICdAZmUtbW9ub3JlcG8tcG9jL2RpZ2l0YWwnLFxyXG4gICAgICAvLyAnQGZlLW1vbm9yZXBvLXBvYy9zdG9yZScsXHJcbiAgICAgIC8vICdAZmUtbW9ub3JlcG8tcG9jL3NlYXJjaCcsXHJcbiAgICBdLFxyXG4gICAgZm9yY2U6IHRydWUsIC8vIG9uIGRldiBzZXJ2ZXIgc3RhcnQsIGRvIGEgZm9yY2UgYnVuZGxlXHJcbiAgfSxcclxuXHJcbiAgLy8gVW5jb21tZW50IHRoaXMgaWYgeW91IGFyZSB1c2luZyB3b3JrZXJzLlxyXG4gIC8vIHdvcmtlcjoge1xyXG4gIC8vICBwbHVnaW5zOiBbIG54Vml0ZVRzUGF0aHMoKSBdLFxyXG4gIC8vIH0sXHJcblxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6ICcuLi8uLi9kaXN0L2FwcHMvcG9jJyxcclxuICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiB0cnVlLFxyXG4gICAgY29tbW9uanNPcHRpb25zOiB7XHJcbiAgICAgIHRyYW5zZm9ybU1peGVkRXNNb2R1bGVzOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIG1pbmlmeTogdHJ1ZSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XHJcbiAgICAgICAgICByZWFjdDogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcclxuICAgICAgICAgIG1hbnRpbmU6IFsnQG1hbnRpbmUvY29yZSddLFxyXG4gICAgICAgICAgcm91dGVyOiBbJ0B0YW5zdGFjay9yZWFjdC1yb3V0ZXInXSxcclxuICAgICAgICAgIHpvZDogWyd6b2QnXVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIHRlc3Q6IHtcclxuICAgIGdsb2JhbHM6IHRydWUsXHJcbiAgICBjYWNoZToge1xyXG4gICAgICBkaXI6ICcuLi8uLi9ub2RlX21vZHVsZXMvLnZpdGVzdCcsXHJcbiAgICB9LFxyXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXHJcbiAgICBpbmNsdWRlOiBbJ3NyYy8qKi8qLnt0ZXN0LHNwZWN9LntqcyxtanMsY2pzLHRzLG10cyxjdHMsanN4LHRzeH0nXSxcclxuXHJcbiAgICByZXBvcnRlcnM6IFsnZGVmYXVsdCddLFxyXG4gICAgY292ZXJhZ2U6IHtcclxuICAgICAgcmVwb3J0c0RpcmVjdG9yeTogJy4uLy4uL2NvdmVyYWdlL2FwcHMvcG9jJyxcclxuICAgICAgcHJvdmlkZXI6ICd2OCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsa0JBQWtCO0FBSjNCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUVWLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBRUEsU0FBUyxDQUFDLE1BQU0sR0FBRyxjQUFjLEdBQUcsV0FBVyxDQUFDO0FBQUEsRUFFaEQsY0FBYztBQUFBLElBQ1osU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBLElBSVQ7QUFBQSxJQUNBLE9BQU87QUFBQTtBQUFBLEVBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1Isc0JBQXNCO0FBQUEsSUFDdEIsaUJBQWlCO0FBQUEsTUFDZix5QkFBeUI7QUFBQSxJQUMzQjtBQUFBLElBQ0EsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBLFVBQ1osT0FBTyxDQUFDLFNBQVMsV0FBVztBQUFBLFVBQzVCLFNBQVMsQ0FBQyxlQUFlO0FBQUEsVUFDekIsUUFBUSxDQUFDLHdCQUF3QjtBQUFBLFVBQ2pDLEtBQUssQ0FBQyxLQUFLO0FBQUEsUUFDYjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUEsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBLGFBQWE7QUFBQSxJQUNiLFNBQVMsQ0FBQyxzREFBc0Q7QUFBQSxJQUVoRSxXQUFXLENBQUMsU0FBUztBQUFBLElBQ3JCLFVBQVU7QUFBQSxNQUNSLGtCQUFrQjtBQUFBLE1BQ2xCLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
