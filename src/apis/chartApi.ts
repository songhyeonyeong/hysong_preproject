import {api} from '@/apis/ApiService'

export const chartApi = {
  getChart: () => api.get("movie/now_playing"),
};

