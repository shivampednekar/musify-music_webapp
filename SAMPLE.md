export const shazamCoreApi = createApi({
reducerPath: 'shazamCoreApi',
baseQuery: fetchBaseQuery({
baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
prepareHeaders: (headers) => {
headers.set(
'X-RapidAPI-Key',
'b9e02a9337msh66588b912d01222p1d2f6cjsn580153a0f85a'
);

      return headers;
    },

}),

<!-- SPOTIFY COLOR SCHEME -->

Background → #131313 #212529 #1e1e1e
CardColor → #272727 #2A2B2A
Border → #adb5bd
ColorText → #FAFAFA
ColorStack → #D4E4BC
Primary → #1fdf64 #36558F
2ND Primary → #96ACB7

@mixin respond( $breakpotnt) {
@if $breakpoint == phone {
@media (max-width: 37.5em) { @content }; //600px
}

@if $breakpoint == tab-port {
@media (max-width: 56.25em) { @content }; //900px
}

@if $breakpoint == tab-land {
@media (max-width: 75em) { @content }; //1200px
}

@if $breakpoint == big-desktop {
@media (max-width: 112.5em) { @content }; //1800px
}
}

@mixin respond( $breakpotnt) {

}

@mixin respond( $breakpotnt) {
@if $breakpoint == phone {
@media (max-width: 37.5em) { @content }; //600px
}
}
