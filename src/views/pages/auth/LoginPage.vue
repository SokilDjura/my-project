<template>
  <div>
    <div class='text-center mb-3'>
      <h5 class='text-primary'>З поверненням!</h5>
      <p class='text-muted mb-0'>Увійдіть, щоб перейти до Tag.</p>
    </div>
    <b-form @submit.prevent='onSubmit'>
      <b-form-group
        id='input-group-1'
        class='mb-3'
        label='Email'
        label-for='input-1'
      >
        <b-form-input
          id='input-1'
          v-model='user.email'
          :class="{ 'is-invalid': $v.user.email.$error }"
          placeholder='Введіть email'
          type='text'
        ></b-form-input>
        <div v-if='$v.user.email.$error' class='invalid-feedback'>
          <span v-if='!$v.user.email.required'>Необхідно вказати email</span>
          <span v-if='!$v.user.email.email'>Введіть дійсну адресу електронної пошти</span>
        </div>
      </b-form-group>

      <b-form-group id='input-group-2' class='mb-3'>
        <div class='float-end'>
          <!--          <router-link :to="{name: 'ForgotPasswordPage'}" class='text-muted'>Forgot password?</router-link>-->
        </div>
        <label for='input-2'>Пароль</label>
        <b-form-input
          id='input-2'
          v-model='user.password'
          :class="{'is-invalid': $v.user.password.$error}"
          placeholder='Введіть password'
          type='password'
        ></b-form-input>
        <div v-if='!$v.user.password.required' class='invalid-feedback'>Необхідно ввести пароль</div>
        <div v-if='!$v.user.password.minLength' class='invalid-feedback'>
          Пароль повинен містити не менше {{ $v.user.password.$params.minLength.min }} символів.
          Залишилось {{ passwordCharactersLeft }} символів.
        </div>
      </b-form-group>
      <div class='text-end'>
        <loader-btn
          :loading='loginLoading'
          class='w-sm'
          text='Увійти'
        />
      </div>
    </b-form>
  </div>
</template>

<script>
import LoaderBtn from '@/components/loader-btn'
import { email, minLength, required } from 'vuelidate/lib/validators'

export default {
  name: 'LoginPage',
  components: {
    LoaderBtn
  },
  data: () => ({
    user: {
      email: '',
      password: ''
    },
    loginLoading: false
  }),
  validations: {
    user: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      }
    }
  },
  computed: {
    passwordCharactersLeft() {
      return this.$v.user.password.$params.minLength.min - this.user.password.length
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.loginLoading = true
      }
    }
  }
}
</script>