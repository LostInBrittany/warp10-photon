# Release notes for Warp10 Photon

## Version 1.0.8

- Adding Travis build, removing unused dependencies

## Version 1.0.7

- Recovering context on reload: at every WarpScript execution, the context (script and backend) is saved on session storage. The last saved context is restored at reload.