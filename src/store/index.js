import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'

const dataLink = 'https://achar1f.github.io/vueEOMPData/data/'

export default createStore({
  state: {
    jobTitle: null,
    experience: null,
    about: null,
    education: null,
    skills: null,
    projects: null,
    testimonials: null,
  },
  getters: {
  },
  mutations: {
    setJobTitle(state, value) {
      state.jobTitle = value
    },
    setExperience(state, value) {
      state.experience = value
    },
    setAbout(state, value) {
      state.about = value
    },
    setEducation(state, value) {
      state.education = value
    },
    setSkills(state, value) {
      state.skills = value
    },
    setProjects(state, value) {
      state.projects = value
    },
    setTestimonials(state, value) {
      state.testimonials = value
    }
  },
  actions: {
    async fetchJobTitle(context){
      try {
        let {jobTitle} =  await (await axios.get(dataLink)).data
        context.commit('setJobTitle', jobTitle)
      } 
      catch (e) {
        Swal.fire ({
          title: "Error",
          text: "Failed to fetch job title data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchAbout(context){
      try {
        let {About} =  await (await axios.get(dataLink)).data
        context.commit('setAbout', About)
      } 
      catch (e) {
        Swal.fire ({
          title: "Error",
          text: "Failed to fetch about data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchExperience(context){
      try {
        let {Experience} =  await (await axios.get(dataLink)).data
        context.commit('setExperience', Experience)
      } 
      catch (e) {
        Swal.fire ({
          title: "Error",
          text: "Failed to fetch experience data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchSkills(context){
      try {
        let {Skills} =  await (await axios.get(dataLink)).data
        context.commit('setSkills', Skills)
      } 
      catch (e) {
        Swal.fire ({
          title: "Error",
          text: "Failed to fetch skills data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchProjects(context){
      try {
        let {Projects} =  await (await axios.get(dataLink)).data
        context.commit('setProjects', Projects)
      } 
      catch (e) {
        Swal.fire ({
          title: "Error",
          text: "Failed to fetch projects data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchTestimonials(context){
      try {
        let {Testimonials} =  await (await axios.get(dataLink)).data
        context.commit('setTestimonials', Testimonials)
      } 
      catch (e) {
        Swal.fire ({
          title: "Error",
          text: "Failed to fetch testimonials data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchEducation(context){
      try {
        let {Education} =  await (await axios.get(dataLink)).data
        context.commit('setEducation', Education)
      } 
      catch (e) {
        Swal.fire ({
          title: "Error",
          text: "Failed to fetch education data",
          icon: "error",
          timer: 2000
        })
      }
    }
  },
  modules: {
  }
})
