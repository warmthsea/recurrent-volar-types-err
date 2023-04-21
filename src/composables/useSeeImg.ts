import type SeeImgVue from '~/components/SeeImg.vue'

export const useSeeImg = () => {
  const seeImgRef = ref<InstanceType<typeof SeeImgVue>>()
  const seeImg = (url: string) => seeImgRef.value?.see(url)

  return { seeImgRef, seeImg }
}
