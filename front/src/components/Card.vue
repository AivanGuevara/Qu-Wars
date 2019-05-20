<template>
  <div>
  <b-card no-body class="overflow-hidden" style="max-width: 300px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-body :title="title">
          <b-card-text>
            Rotation Period: {{rotation_period}}
            Diameter: {{diameter}}
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
</template>

<script>
export default {
    name:'Card',
    props: {
       title: String,
       rotation_period: String,
       diameter: Number
    }
}
</script>
