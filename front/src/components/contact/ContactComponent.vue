<template>
    <div class="contact-form">
        <h2>Contact</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="firstname">Prénom</label>
                <input type="text" id="lastname" v-model="firstname" required/>
            </div>
            <div class="form-group">
                <label for="lastname">Nom</label>
                <input type="text" id="lastname" v-model="lastname" required/>
            </div>
            <div class="form-group">
                <label for="email">Courrier électronique</label>
                <input type="email" id="email" v-model="email" required/>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="message" required></textarea>
            </div>
            <button type="submit">Envoyer le message</button>
        </form>
    </div>
</template>

<script>

import '@/components/contact/contact.scss';

export default {
    data() {
        return {
            firstname: '',
            lastname: '',
            email: ''
        };
    },
    methods: {
        handleSubmit() {
            console.log('Prénom: ', this.firstname);
            console.log('Nom: ', this.lastname);
            console.log('Courrier électronique: ', this.email);
        }
    }
}
</script>
