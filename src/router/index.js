import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FirstSteps from '../views/FirstSteps.vue'
import MarkdownEditor from '../views/MarkdownEditor.vue'
import FetchingData from '../views/FetchingData.vue'
import SortAndFilter from '../views/SortAndFilter.vue'
import TreeView from '../views/TreeView.vue'
import SVGGraph from '../views/SVGGraph.vue'
import Modal from '../views/Modal.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/first-steps',
      component: FirstSteps,
    },
    {
      path: '/markdown-editor',
      component: MarkdownEditor,
    },
    {
      path: '/fetching-data',
      component: FetchingData,
    },
    {
      path: '/sort-filter',
      component: SortAndFilter,
    },
    {
      path: '/tree-view',
      component: TreeView,
    },
    {
      path: '/svg-graph',
      component: SVGGraph,
    },
    {
      path: '/modal',
      component: Modal,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
  ],
})

export default router
