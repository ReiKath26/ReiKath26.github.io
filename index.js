import * as THREE from './threejs/build/three.module.js'
import { FontLoader } from './threejs/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from './threejs/examples/jsm/geometries/TextGeometry.js'

var scene, renderer, camera
var object = [], descText = [], indexText = 0, changeObject = true
var titleText, subtitleText, isPressable = true, isPressable2 = true, 
isPressable3 = true
var wrong = false
var score = 0
var loader = new THREE.TextureLoader()

var doInit = () => {
    scene = new THREE.Scene()

    const FOV = 75
    const WIDTH = window.innerWidth
    const HEIGHT = window.innerHeight
    const ASPECT =  WIDTH / HEIGHT

    const listener = new THREE.AudioListener()

    camera = new THREE.PerspectiveCamera(FOV, ASPECT) 
    camera.add(listener)

    const sound = new THREE.Audio(listener)

    const audioLoader = new THREE.AudioLoader()
    audioLoader.load('./assets/Sound/Galaxy.ogg', function( buffer ) {
	    sound.setBuffer( buffer )
	    sound.setLoop( true )
	    sound.setVolume( 0.5 )
        sound.play()
    });

    sound.autoplay = true

    renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setSize(WIDTH, HEIGHT)
    renderer.setClearColor(0x303030)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    
    document.body.appendChild(renderer.domElement)

    camera.position.set(0, 0, -120)
    camera.lookAt(0, 0, -120)

    object[0] = createBoxGeometry()
    object[1] = createCuboidGeometry()
    object[2] = createCylinderGeometry()
    object[3] = createConeGeometry()
    object[4] = createSphereGeometry()
    object[5] = createPyramidGeometry()
    object[6] = createPrismGeometry()
    object[7] = createBoxGeometry()
    object[8] = createDice()
    object[9] = createIce()
    object[10] = createCylinderGeometry()
    object[11] = createBattery()
    object[12] = createCocaCola()
    object[13] = createSphereGeometry()
    object[14] = createSoccerBall()
    object[15] = createGlobe()
    object[16] = createCuboidGeometry()
    object[17] = createCupboard()
    object[18] = createSponge()
    object[19] = createConeGeometry()
    object[20] = createiceCreamCode()
    object[21] = createParty()
    object[22] = createPyramidGeometry()
    object[23] = createPyramidReal()
    object[24] = createPrismGeometry()
    object[25] = createCheese()

    createDescText('1. Cube')
    createDescText('4. Cuboid')
    createDescText('2. Cylinder')
    createDescText('5. Cone')
    createDescText('3. Sphere')
    createDescText('6. Pyramid')
    createDescText('7. Prism')
    createDescText("LET'S PLAY")
    createDescText("(Press 'P' to start or press between 1 to 7 to see shape details)")
    createDescText('Which one is Cone?')
    createDescText('Which one is Pyramid?')
    createDescText('Which one is Cuboid?')
    createDescText('Which one is Cylinder?')
    createDescText('Which one is Prism?')
    createDescText('Which one is Cube?')
    createDescText('Which one is Sphere?')
    createDescText('You did Great!')
    createDescText('Thank you for Playing')

    createDescText("CUBE")
    createDescText("Cube has six similar square faces")
    createDescText("The following things are cube shaped:")
    createDescText("Dice")
    createDescText("Ice cube")
    createDescText("Press enter to go back...")
    
    createDescText("CUBOID")
    createDescText("Cuboid also has six square faces, yet their size might differ")
    createDescText("The following things are cuboid shaped:")
    createDescText("Cupboard")
    createDescText("Sponge")

    createDescText("CYLINDER")
    createDescText("Cylinder is formed from one big square wrapped together and close by two circles")
    createDescText("The following things are cylinder shaped:")
    createDescText("Battery")
    createDescText("Can of Soda")

    createDescText("CONE")
    createDescText("Cone has a sharp pointy edge while the other wide edge is in shape of circle")
    createDescText("The following things are cone shaped:")
    createDescText("Ice cream cone")
    createDescText("Party hat")

    createDescText("SPHERE")
    createDescText("Sphere doesn't have any edge and is all round")
    createDescText("The following things are sphere shaped:")
    createDescText("Soccer ball")
    createDescText("Globe")

    createDescText("PYRAMID")
    createDescText("Pyramid is made with four triangles sticked in the side of a square as foundation")
    createDescText("The following things are pyramid shaped:")
    createDescText("Real Life Pyramid")

    createDescText("PRISM")
    createDescText("Prism is made with two triangles and two rectangle sticked in the side of a square as foundation")
    createDescText("The following things are pyramid shaped:")
    createDescText("Cheese")

    createSkybox()
    createTitleText('3D Geometry Objects')
    createSubtitleText('>> Press Enter to continue <<')
}

var doRender = () => {
    requestAnimationFrame(doRender)
    
    object[0].rotation.x += 0.01
    object[0].rotation.y += 0.01
    object[0].rotation.z += 0.01
    object[1].rotation.x += 0.01
    object[1].rotation.y += 0.01
    object[1].rotation.z += 0.01
    object[2].rotation.x += 0.01
    object[2].rotation.y += 0.01
    object[2].rotation.z += 0.01
    object[3].rotation.x += 0.01
    object[3].rotation.y += 0.01
    object[3].rotation.z += 0.01
    object[4].rotation.x += 0.01
    object[4].rotation.y += 0.01
    object[4].rotation.z += 0.01
    object[5].rotation.x += 0.01
    object[5].rotation.y += 0.01
    object[5].rotation.z += 0.01
    object[6].rotation.x += 0.01
    object[6].rotation.y += 0.01
    object[6].rotation.z += 0.01
    object[7].rotation.x += 0.01
    object[7].rotation.y += 0.01
    object[7].rotation.z += 0.01
    object[8].rotation.x += 0.01
    object[8].rotation.y += 0.01
    object[8].rotation.z += 0.01
    object[9].rotation.x += 0.01
    object[9].rotation.y += 0.01
    object[9].rotation.z += 0.01
    object[10].rotation.x += 0.01
    object[10].rotation.y += 0.01
    object[10].rotation.z += 0.01
    object[11].rotation.x += 0.01
    object[11].rotation.y += 0.01
    object[11].rotation.z += 0.01
    object[12].rotation.x += 0.01
    object[12].rotation.y += 0.01
    object[12].rotation.z += 0.01
    object[13].rotation.x += 0.01
    object[13].rotation.y += 0.01
    object[13].rotation.z += 0.01
    object[14].rotation.x += 0.01
    object[14].rotation.y += 0.01
    object[14].rotation.z += 0.01
    object[15].rotation.x += 0.01
    object[15].rotation.y += 0.01
    object[15].rotation.z += 0.01
    object[16].rotation.x += 0.01
    object[16].rotation.y += 0.01
    object[16].rotation.z += 0.01
    object[17].rotation.x += 0.01
    object[17].rotation.y += 0.01
    object[17].rotation.z += 0.01
    object[18].rotation.x += 0.01
    object[18].rotation.y += 0.01
    object[18].rotation.z += 0.01
    object[19].rotation.x += 0.01
    object[19].rotation.y += 0.01
    object[19].rotation.z += 0.01
    object[20].rotation.x += 0.01
    object[20].rotation.y += 0.01
    object[20].rotation.z += 0.01
    object[21].rotation.x += 0.01
    object[21].rotation.y += 0.01
    object[21].rotation.z += 0.01
    object[22].rotation.x += 0.01
    object[22].rotation.y += 0.01
    object[22].rotation.z += 0.01
    object[23].rotation.x += 0.01
    object[23].rotation.y += 0.01
    object[23].rotation.z += 0.01
    object[24].rotation.x += 0.01
    object[24].rotation.y += 0.01
    object[24].rotation.z += 0.01
    object[25].rotation.x += 0.01
    object[25].rotation.y += 0.01
    object[25].rotation.z += 0.01

    renderer.render(scene, camera)
}

var createBoxGeometry = () => {
    let geometry = new THREE.BoxGeometry(15,15,15)
    let material = new THREE.MeshBasicMaterial({
        color: '#C22C4E', side: THREE.DoubleSide
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(-20,0,-160)
    mesh.receiveShadow = true
    mesh.castShadow = true

    return mesh
}

var createDice = () => {
    let geometry = new THREE.BoxGeometry(15,15,15)
    let texture = loader.load('./assets/texture6.png')
    let material = new THREE.MeshBasicMaterial({
        map: texture , side: THREE.DoubleSide
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(-20,0,-160)
    mesh.receiveShadow = true
    mesh.castShadow = true

    return mesh
}

var createIce= () => {
    let geometry = new THREE.BoxGeometry(15,15,15)
    let texture = loader.load('./assets/download.jpg')
    let material = new THREE.MeshBasicMaterial({
        map: texture , side: THREE.DoubleSide
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(-20,0,-160)
    mesh.receiveShadow = true
    mesh.castShadow = true

    return mesh
}

var createCuboidGeometry = () => {
    let geometry = new THREE.BoxGeometry(30,15,15)
    let material = new THREE.MeshBasicMaterial({
        color: '#5faca1', side: THREE.DoubleSide
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(-20,0,-160)
    mesh.receiveShadow = true
    mesh.castShadow = true

    return mesh
}

var createCupboard = () => {
    let geometry = new THREE.BoxGeometry(30,15,15)
    let texture = loader.load('./assets/wood.jpg')
    let material = new THREE.MeshBasicMaterial({
        map: texture, side: THREE.DoubleSide
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(-20,0,-160)
    mesh.receiveShadow = true
    mesh.castShadow = true

    return mesh
}

var createSponge = () => {
    let geometry = new THREE.BoxGeometry(30, 15, 5)
    let texture = loader.load('./assets/sponge.jpg')
    let material = new THREE.MeshBasicMaterial({
        map: texture, side: THREE.DoubleSide
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(-20,0,-160)
    mesh.receiveShadow = true
    mesh.castShadow = true

    return mesh
}

var createCylinderGeometry = () => {
    let geometry = new THREE.CylinderGeometry(7.5,7.5,20,64)
    let material = new THREE.MeshBasicMaterial({
        color: '#e82cb5', side: THREE.DoubleSide
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(-20,0,-160)
    mesh.receiveShadow = true
    mesh.castShadow = true

    return mesh
}

var createCocaCola = () => {
    let geometry = new THREE.CylinderGeometry(7.5,7.5,20,64)
    let texture = loader.load('./assets/cocacola.jpg')
    let material = new THREE.MeshBasicMaterial({
        map: texture, side: THREE.DoubleSide
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(-20,0,-160)
    mesh.receiveShadow = true
    mesh.castShadow = true

    return mesh
}

var createBattery = () => {
    let geometry = new THREE.CylinderGeometry(5, 5, 20, 64)
    let texture = loader.load('./assets/battery.jpg')
    let material = new THREE.MeshBasicMaterial({
        map: texture, side: THREE.DoubleSide
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(-20,0,-160)
    mesh.receiveShadow = true
    mesh.castShadow = true

    return mesh
}

var createConeGeometry = () => {
    let geometry = new THREE.ConeGeometry(7.5,20,64)
    let material = new THREE.MeshBasicMaterial({
        color: '#fff2cc', side: THREE.DoubleSide
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(-20,0,-160)
    mesh.receiveShadow = true
    mesh.castShadow = true

    return mesh
}

var createiceCreamCode = () => {
    let geometry = new THREE.ConeGeometry(7.5,20,64)
    let texture = loader.load('./assets/cone.jpg')
    let material = new THREE.MeshBasicMaterial({
        map: texture , side: THREE.DoubleSide
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(-20,0,-160)
    mesh.receiveShadow = true
    mesh.castShadow = true

    return mesh
}

var createParty = () => {
    let geometry = new THREE.ConeGeometry(7.5,20,64)
    let texture = loader.load('./assets/party.jpg')
    let material = new THREE.MeshBasicMaterial({
        map: texture , side: THREE.DoubleSide
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(-20,0,-160)
    mesh.receiveShadow = true
    mesh.castShadow = true

    return mesh
}

var createSphereGeometry = () => {
    let geometry = new THREE.SphereGeometry(7.5,64,32)
    let texture = loader.load('./assets/green-gradient.jpg')
    let material = new THREE.MeshBasicMaterial({
        map: texture, side: THREE.DoubleSide
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(-20,0,-160)
    mesh.receiveShadow = true
    mesh.castShadow = true

    return mesh
}

var createSoccerBall = () => {
    let geometry = new THREE.SphereGeometry(7.5,64,32)
    let texture = loader.load('./assets/soccer.jpg')
    let material = new THREE.MeshBasicMaterial({
        map: texture, side: THREE.DoubleSide
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(-20,0,-160)
    mesh.receiveShadow = true
    mesh.castShadow = true

    return mesh
}

var createGlobe = () => {
    let geometry = new THREE.SphereGeometry(7.5,64,32)
    let texture = loader.load('./assets/globe.jpg')
    let material = new THREE.MeshBasicMaterial({
        map: texture, side: THREE.DoubleSide
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(-20,0,-160)
    mesh.receiveShadow = true
    mesh.castShadow = true

    return mesh
}

var createPyramidGeometry = () => {
    let geometry = new THREE.ConeGeometry(10,10,4)
    let material = new THREE.MeshBasicMaterial({
        color: '#a48ab2', side: THREE.DoubleSide
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(-20,0,-160)
    mesh.receiveShadow = true
    mesh.castShadow = true

    return mesh
}

var createPyramidReal = () => {
    let geometry = new THREE.ConeGeometry(10,10,4)
    let texture = loader.load('./assets/brick.jpg')
    let material = new THREE.MeshBasicMaterial({
        map: texture, side: THREE.DoubleSide
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(-20,0,-160)
    mesh.receiveShadow = true
    mesh.castShadow = true

    return mesh
}

var createPrismGeometry = () => {
    let geometry = new THREE.CylinderGeometry(7.5,7.5,20,3)
    let material = new THREE.MeshBasicMaterial({
        color: '#0096b4', side: THREE.DoubleSide
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(-20,0,-160)
    mesh.receiveShadow = true
    mesh.castShadow = true

    return mesh
}

var createCheese = () => {
    let geometry = new THREE.CylinderGeometry(7.5,7.5,20,3)
    let texture = loader.load('./assets/cheese.jpg')
    let material = new THREE.MeshBasicMaterial({
        map: texture, side: THREE.DoubleSide
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(-20,0,-160)
    mesh.receiveShadow = true
    mesh.castShadow = true

    return mesh
}

var createTitleText = (text) => {
    let loaderFont = new FontLoader()
    loaderFont.load('./threejs/examples/fonts/helvetiker_bold.typeface.json', (font) => {
        let textGeometry = new TextGeometry(text, {
            font: font, size: 2, height: 0.1
        })
        textGeometry.center()
        let textMaterial = new THREE.MeshBasicMaterial({
            color: '#895873'
        })
        let textMesh = new THREE.Mesh(textGeometry,textMaterial)
        textMesh.position.set(0,0.5,-135)
        textMesh.rotation.set(-Math.PI/8,0,0)
        textMesh.receiveShadow = true
        textMesh.castShadow = true
        titleText = textMesh

        scene.add(titleText)
    })
}

var createSubtitleText = (text) => {
    let loaderFont = new FontLoader()
    loaderFont.load('./threejs/examples/fonts/helvetiker_bold.typeface.json', (font) => {
        let textGeometry = new TextGeometry(text, {
            font: font, size: 0.6, height: 0.1
        })
        textGeometry.center()
        let textMaterial = new THREE.MeshBasicMaterial({
            color: '#B4A4B9'
        })
        let textMesh = new THREE.Mesh(textGeometry,textMaterial)
        textMesh.position.set(0,-2.5,-135)
        textMesh.rotation.set(-Math.PI/8,0,0)
        textMesh.receiveShadow = true
        textMesh.castShadow = true
        subtitleText = textMesh

        scene.add(subtitleText)
    })
}

var createDescText = (text) => {
    let loaderFont = new FontLoader()
    loaderFont.load('./threejs/examples/fonts/helvetiker_bold.typeface.json', (font) => {
        let textGeometry = new TextGeometry(text, {
            font: font, size: 2, height: 0.1
        })
        textGeometry.center()
        let textMaterial = new THREE.MeshBasicMaterial({
            color: '#FBE0C2'
        })
        let textMesh = new THREE.Mesh(textGeometry,textMaterial)
        textMesh.position.set(10,0,-140)
        textMesh.rotation.set(0,0,0)
        textMesh.receiveShadow = true
        textMesh.castShadow = true
        descText[indexText] = textMesh
        indexText++
    })
}

var createSkybox = () => {
    const geometry = new THREE.BoxGeometry(500,500,500)
    const materials = [
        new THREE.MeshBasicMaterial({
            map: loader.load('./assets/skyboxes/galaxy+X.jpg'),
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map: loader.load('./assets/skyboxes/galaxy-X.jpg'),
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map: loader.load('./assets/skyboxes/galaxy+Y.jpg'),
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map: loader.load('./assets/skyboxes/galaxy-Y.jpg'),
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map: loader.load('./assets/skyboxes/galaxy+Z.jpg'),
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map: loader.load('./assets/skyboxes/galaxy-Z.jpg'),
            side: THREE.BackSide
        }),
    ]
    const skybox = new THREE.Mesh(geometry,materials)
    scene.add(skybox)
}

var keyboardPressTitle = (event) => {
    const key = event.keyCode
    if(key === 13){
        if(isPressable === true){
            isPressable2 = true
            isPressable3 = true
            isPressable = false
            camera.position.z = -60
            camera.position.y = -28
            scene.remove(titleText)
            scene.remove(subtitleText)
            scene.add(object[0])
            scene.add(descText[0])
            object[0].position.x = -90
            object[0].position.y = 20
            descText[0].position.x = -35
            descText[0].position.y = 10
            scene.add(object[1])
            scene.add(descText[1])
            object[1].position.x = -90
            object[1].position.y = -20
            descText[1].position.x = -35
            descText[1].position.y = -20
            scene.add(object[2])
            scene.add(descText[2])
            object[2].position.x = -10
            descText[2].position.x = 20
            object[2].position.y = 20
            descText[2].position.y = 10
            scene.add(object[3])
            scene.add(descText[3])
            object[3].position.x = -10
            descText[3].position.x = 20
            object[3].position.y = -20
            descText[3].position.y = -20
            scene.add(object[4])
            scene.add(descText[4])
            object[4].position.x = 60
            object[4].position.y = 20
            descText[4].position.x = 75
            descText[4].position.y = 10
            scene.add(object[5])
            scene.add(descText[5])
            object[5].position.x = 60
            object[5].position.y = -20
            descText[5].position.x = 75
            descText[5].position.y = -20
            scene.add(object[6])
            scene.add(descText[6])
            object[6].position.x = -10
            descText[6].position.x = 20
            object[6].position.y = -55
            descText[6].position.y = -50
            scene.add(descText[7])
            scene.add(descText[8])
            descText[7].position.set(6,-70,-140)
            descText[7].scale.set(3,3,3)
            descText[8].position.set(6,-80,-140)

            for(let index=18; index<=52;index++)
            {
                scene.remove(descText[index])
            }

            for(let index=7; index<=27;index++)
            {
                scene.remove(object[index])
            }
        }
    }
}


var seeCube = (event) =>{
    const key = event.keyCode
    if(key === 49 && isPressable3 === true)
    {
        isPressable2 = false
        isPressable3 = false
        isPressable = true
        for(let index=0; index <= 8; index++)
        {
            scene.remove(descText[index])
        }

        for(let index=0; index <= 6; index++)
        {
            scene.remove(object[index])
        }
        scene.add(object[7])
        scene.add(descText[18])
        descText[18].position.set(6,20,-140)
        descText[18].scale.set(2,2,2)
        scene.add(descText[19])
        descText[19].scale.set(1.5, 1.5, 1.5)
        descText[19].position.set(30, -5, -140)
        scene.add(descText[20])
        descText[20].scale.set(1, 1, 1)
        descText[20].position.set(30, -15, -140)
        scene.add(object[8])
        object[8].position.set(10, -35, -140)
        scene.add(object[9])
        object[9].position.set(50, -35, -140)
        scene.add(descText[21])
        descText[21].scale.set(1, 1, 1)
        descText[21].position.set(10, -53, -140)
        scene.add(descText[22])
        descText[22].scale.set(1, 1, 1)
        descText[22].position.set(50, -53, -140)
        scene.add(descText[23])
        descText[23].scale.set(1.5, 1.5, 1.5)
        descText[23].position.set(0, -70, -140)

        object[7].scale.set(2.5, 2.5, 2.5)
        object[7].position.set(-45, -20, -140)
    }
}

var seeSphere = (event) =>{
    const key = event.keyCode
    if(key === 51 && isPressable3 === true)
    {
        isPressable2 = false
        isPressable3 = false
        isPressable = true

        for(let index=0; index <= 8; index++)
        {
            scene.remove(descText[index])
        }

        for(let index=0; index <= 6; index++)
        {
            scene.remove(object[index])
        }

        scene.add(object[13])
        scene.add(descText[39])
        descText[39].position.set(6,20,-140)
        descText[39].scale.set(2,2,2)
        scene.add(descText[40])
        descText[40].scale.set(1.5, 1.5, 1.5)
        descText[40].position.set(30, -5, -140)
        scene.add(descText[41])
        descText[41].scale.set(1, 1, 1)
        descText[41].position.set(30, -15, -140)
        scene.add(object[14])
        object[14].position.set(10, -35, -140)
        scene.add(object[15])
        object[15].position.set(50, -35, -140)
        scene.add(descText[42])
        descText[42].scale.set(1, 1, 1)
        descText[42].position.set(10, -53, -140)
        scene.add(descText[43])
        descText[43].scale.set(1, 1, 1)
        descText[43].position.set(50, -53, -140)
        scene.add(descText[23])
        descText[23].scale.set(1.5, 1.5, 1.5)
        descText[23].position.set(0, -70, -140)

        object[13].scale.set(2.5, 2.5, 2.5)
        object[13].position.set(-45, -20, -140)
    }
}

var seeCone = (event) =>{
    const key = event.keyCode
    if(key === 53 && isPressable3 === true)
    {
        isPressable2 = false
        isPressable3 = false
        isPressable = true

        for(let index=0; index <= 8; index++)
        {
            scene.remove(descText[index])
        }

        for(let index=0; index <= 6; index++)
        {
            scene.remove(object[index])
        }

        scene.add(object[19])
        scene.add(descText[34])
        descText[34].position.set(6,20,-140)
        descText[34].scale.set(2,2,2)
        scene.add(descText[35])
        descText[35].scale.set(1.5, 1.5, 1.5)
        descText[35].position.set(30, -5, -140)
        scene.add(descText[36])
        descText[36].scale.set(1, 1, 1)
        descText[36].position.set(30, -15, -140)
        scene.add(object[20])
        object[20].position.set(10, -35, -140)
        scene.add(object[21])
        object[21].position.set(50, -35, -140)
        scene.add(descText[37])
        descText[37].scale.set(1, 1, 1)
        descText[37].position.set(10, -53, -140)
        scene.add(descText[38])
        descText[38].scale.set(1, 1, 1)
        descText[38].position.set(50, -53, -140)
        scene.add(descText[23])
        descText[23].scale.set(1.5, 1.5, 1.5)
        descText[23].position.set(0, -70, -140)

        object[19].scale.set(2, 2, 2)
        object[19].position.set(-45, -30, -140)
    }
}

var seePyramid = (event) =>{
    const key = event.keyCode
    if(key === 54 && isPressable3 === true)
    {
        isPressable2 = false
        isPressable3 = false
        isPressable = true

        for(let index=0; index <= 8; index++)
        {
            scene.remove(descText[index])
        }

        for(let index=0; index <= 6; index++)
        {
            scene.remove(object[index])
        }

        scene.add(object[22])
        scene.add(descText[44])
        descText[44].position.set(6,20,-140)
        descText[44].scale.set(2,2,2)
        scene.add(descText[45])
        descText[45].scale.set(1.5, 1.5, 1.5)
        descText[45].position.set(30, -5, -140)
        scene.add(descText[46])
        descText[46].scale.set(1, 1, 1)
        descText[46].position.set(30, -15, -140)
        scene.add(object[23])
        object[23].position.set(10, -35, -140)
        scene.add(descText[47])
        descText[47].scale.set(1, 1, 1)
        descText[47].position.set(10, -53, -140)
        scene.add(descText[23])
        descText[23].scale.set(1.5, 1.5, 1.5)
        descText[23].position.set(0, -70, -140)

        object[22].scale.set(2.5, 2.5, 2.5)
        object[22].position.set(-45, -30, -140)
    }
}

var seePrism = (event) =>{
    const key = event.keyCode
    if(key === 55 && isPressable3 === true)
    {
        isPressable2 = false
        isPressable3 = false
        isPressable = true

        for(let index=0; index <= 8; index++)
        {
            scene.remove(descText[index])
        }

        for(let index=0; index <= 6; index++)
        {
            scene.remove(object[index])
        }

        scene.add(object[24])
        scene.add(descText[48])
        descText[48].position.set(6,20,-140)
        descText[48].scale.set(2,2,2)
        scene.add(descText[49])
        descText[49].scale.set(1.5, 1.5, 1.5)
        descText[49].position.set(30, -5, -140)
        scene.add(descText[50])
        descText[50].scale.set(1, 1, 1)
        descText[50].position.set(30, -15, -140)
        scene.add(object[25])
        object[25].position.set(10, -35, -140)
        scene.add(descText[51])
        descText[51].scale.set(1, 1, 1)
        descText[51].position.set(10, -53, -140)
        scene.add(descText[23])
        descText[23].scale.set(1.5, 1.5, 1.5)
        descText[23].position.set(0, -70, -140)

        object[24].scale.set(2, 2, 2)
        object[24].position.set(-45, -30, -140)
    }
}

var seeCuboid = (event) =>{
    const key = event.keyCode
    if(key ===52 && isPressable3 === true)
    {
        isPressable2 = false
        isPressable3 = false
        isPressable = true

        for(let index=0; index <= 8; index++)
        {
            scene.remove(descText[index])
        }

        for(let index=0; index <= 6; index++)
        {
            scene.remove(object[index])
        }

        scene.add(object[16])
        scene.add(descText[24])
        descText[24].position.set(6,20,-140)
        descText[24].scale.set(2,2,2)
        scene.add(descText[25])
        descText[25].scale.set(1, 1, 1)
        descText[25].position.set(30, -5, -140)
        scene.add(descText[26])
        descText[26].scale.set(1, 1, 1)
        descText[26].position.set(30, -15, -140)
        scene.add(object[17])
        object[17].position.set(10, -35, -140)
        scene.add(object[18])
        object[18].position.set(50, -35, -140)
        scene.add(descText[27])
        descText[27].scale.set(1, 1, 1)
        descText[27].position.set(10, -53, -140)
        scene.add(descText[28])
        descText[28].scale.set(1, 1, 1)
        descText[28].position.set(50, -53, -140)
        scene.add(descText[23])
        descText[23].scale.set(1.5, 1.5, 1.5)
        descText[23].position.set(0, -70, -140)

        object[16].scale.set(2, 2, 2)
        object[16].position.set(-45, -20, -140)
    }
}

var seeCylinder = (event) =>{
    const key = event.keyCode
    if(key ===50 && isPressable3 === true)
    {
        isPressable2 = false
        isPressable3 = false
        isPressable = true

        for(let index=0; index <= 8; index++)
        {
            scene.remove(descText[index])
        }

        for(let index=0; index <= 6; index++)
        {
            scene.remove(object[index])
        }

        scene.add(object[10])
        scene.add(descText[29])
        descText[29].position.set(6,20,-140)
        descText[29].scale.set(2,2,2)
        scene.add(descText[30])
        descText[30].scale.set(1, 1, 1)
        descText[30].position.set(30, -5, -140)
        scene.add(descText[31])
        descText[31].scale.set(1, 1, 1)
        descText[31].position.set(30, -15, -140)
        scene.add(object[11])
        object[11].position.set(10, -35, -140)
        scene.add(object[12])
        object[12].position.set(50, -35, -140)
        scene.add(descText[32])
        descText[32].scale.set(1, 1, 1)
        descText[32].position.set(10, -53, -140)
        scene.add(descText[33])
        descText[33].scale.set(1, 1, 1)
        descText[33].position.set(50, -53, -140)
        scene.add(descText[23])
        descText[23].scale.set(1.5, 1.5, 1.5)
        descText[23].position.set(0, -70, -140)

        object[10].scale.set(2, 2, 2)
        object[10].position.set(-45, -20, -140)
    }
}

var startPlaying = (event) => {
    const key = event.keyCode
    if(key === 80 && isPressable2 === true){
        isPressable2 = false
        for (let index = 0; index <= 8; index++) {
            scene.remove(descText[index])
        }
        scene.remove(object[0])
        scene.remove(object[2])
        scene.remove(object[5])
        scene.add(descText[9])
        descText[9].position.set(6,20,-140)
        descText[9].scale.set(2,2,2)
        object[1].position.set(-30,-10,-140)
        object[3].position.set(40,-10,-140)
        object[4].position.set(-30,-60,-140)
        object[6].position.set(40,-60,-140)
        object[3].name = "Cone"
        object[1].name = "Wrong1"
        object[4].name = "Wrong2"
        object[6].name = "Wrong3"
    }
}

var startPlaying2 = () => {
    wrong = false
    scene.remove(object[1])
    scene.remove(object[3])
    scene.remove(object[6])
    scene.remove(descText[9])
    scene.add(descText[10])
    descText[10].position.set(6,20,-140)
    descText[10].scale.set(2,2,2)
    scene.add(object[4])
    scene.add(object[0])
    scene.add(object[2])
    scene.add(object[5])
    object[0].position.set(-30,-10,-140)
    object[4].position.set(40,-10,-140)
    object[5].position.set(-30,-60,-140)
    object[2].position.set(40,-60,-140)
    object[5].name = "Pyramid"
    object[0].name = "Wrong1"
    object[2].name = "Wrong2"
    object[4].name = "Wrong3"
}

var startPlaying3 = () => {
    wrong = false
    scene.remove(object[4])
    scene.remove(object[5])
    scene.remove(object[2])
    scene.remove(descText[10])
    scene.add(descText[11])
    descText[11].position.set(6,20,-140)
    descText[11].scale.set(2,2,2)
    scene.add(object[1])
    scene.add(object[3])
    scene.add(object[6])
    scene.add(object[0])
    object[1].position.set(-30,-10,-140)
    object[6].position.set(40,-10,-140)
    object[3].position.set(-30,-60,-140)
    object[0].position.set(40,-60,-140)
    object[1].name = "Cuboid"
    object[6].name = "Wrong4"
    object[3].name = "Wrong5"
    object[0].name = "Wrong6"
}

var startPlaying4 = () => {
    wrong = false
    scene.remove(object[0])
    scene.remove(object[6])
    scene.remove(object[1])
    scene.remove(descText[11])
    scene.add(descText[12])
    descText[12].position.set(6,20,-140)
    descText[12].scale.set(2,2,2)
    scene.add(object[3])
    scene.add(object[2])
    scene.add(object[4])
    scene.add(object[5])
    object[3].position.set(-30,-10,-140)
    object[4].position.set(40,-10,-140)
    object[2].position.set(-30,-60,-140)
    object[5].position.set(40,-60,-140)
    object[2].name = "Cylinder"
    object[3].name = "Wrong1"
    object[4].name = "Wrong2"
    object[5].name = "Wrong3"
}

var startPlaying5 = () => {
    wrong = false
    scene.remove(object[3])
    scene.remove(object[2])
    scene.remove(object[4])
    scene.remove(descText[12])
    scene.add(descText[13])
    descText[13].position.set(6,20,-140)
    descText[13].scale.set(2,2,2)
    scene.add(object[5])
    scene.add(object[1])
    scene.add(object[0])
    scene.add(object[6])
    object[1].position.set(-30,-10,-140)
    object[0].position.set(40,-10,-140)
    object[6].position.set(-30,-60,-140)
    object[5].position.set(40,-60,-140)
    object[6].name = "Prism"
    object[0].name = "Wrong4"
    object[1].name = "Wrong5"
    object[5].name = "Wrong6"
}

var startPlaying6 = () => {
    wrong = false
    scene.remove(object[6])
    scene.remove(object[5])
    scene.remove(descText[13])
    scene.add(descText[14])
    descText[14].position.set(6,20,-140)
    descText[14].scale.set(2,2,2)
    scene.add(object[0])
    scene.add(object[1])
    scene.add(object[4])
    scene.add(object[2])
    object[4].position.set(-30,-10,-140)
    object[1].position.set(40,-10,-140)
    object[0].position.set(-30,-60,-140)
    object[2].position.set(40,-60,-140)
    object[0].name = "Cube"
    object[2].name = "Wrong7"
    object[1].name = "Wrong9"
    object[4].name = "Wrong0"
}

var startPlaying7 = () => {
    wrong = false
    scene.remove(object[2])
    scene.remove(object[0])
    scene.remove(descText[14])
    scene.add(descText[15])
    descText[15].position.set(6,20,-140)
    descText[15].scale.set(2,2,2)
    scene.add(object[4])
    scene.add(object[1])
    scene.add(object[6])
    scene.add(object[3])
    object[6].position.set(-30,-10,-140)
    object[3].position.set(40,-10,-140)
    object[1].position.set(-30,-60,-140)
    object[4].position.set(40,-60,-140)
    object[4].name = "Sphere"
    object[3].name = "Wrong11"
    object[1].name = "Wrong22"
    object[6].name = "Wrong33"
    createDescText("Score: " + score)
}


var endPlaying = () => {
    scene.remove(object[6])
    scene.remove(object[3])
    scene.remove(object[1])
    scene.remove(object[4])
    scene.remove(descText[15])
    scene.add(descText[16])
    scene.add(descText[17])
    scene.add(descText[52])
    descText[16].position.set(6,-10,-140)
    descText[16].scale.set(3,3,3)
    descText[16].rotation.set(-Math.PI/8,0,0)
    descText[52].position.set(6,-60,-140)
    descText[52].scale.set(3,3,3)
    descText[52].rotation.set(-Math.PI/8,0,0)
    descText[17].position.set(6,-40,-140)
    descText[17].scale.set(3,3,3)
    descText[17].rotation.set(-Math.PI/8,0,0)
}

var mouseClick = (event) => {
    var mouse = new THREE.Vector2()
    mouse.x = event.clientX / window.innerWidth * 2 -1
    mouse.y = -(event.clientY / window.innerHeight) * 2 +1

    var raycast = new THREE.Raycaster()
    raycast.setFromCamera(mouse,camera)

    let intersects = raycast.intersectObjects(scene.children)

    if(intersects[0].object.name === 'Cone'){
        if(wrong === false)
        {
            score+=1
        }
        startPlaying2()
        object[3].name = ""
    }
    else if(intersects[0].object.name == "Wrong1")
    {
        wrong = true
        scene.remove(object[1])
        object[1].name = ""
    }
    else if(intersects[0].object.name == "Wrong2")
    {
        wrong = true
        scene.remove(object[4])
        object[4].name = ""
    }
    else if(intersects[0].object.name == "Wrong3")
    {
        wrong = true
        scene.remove(object[6])
        object[6].name = ""
    }

    if(intersects[0].object.name === 'Pyramid'){
        if(wrong === false)
        {
            score+=1
        }
        startPlaying3()
        object[5].name = ""
    }

    else if(intersects[0].object.name == "Wrong1")
    {
        wrong = true
        scene.remove(object[0])
        object[0].name = ""
    }
    else if(intersects[0].object.name == "Wrong2")
    {
        wrong = true
        scene.remove(object[2])
        object[2].name = ""
    }
    else if(intersects[0].object.name == "Wrong3")
    {
        wrong = true
        scene.remove(object[4])
        object[4].name = ""
    }

    if(intersects[0].object.name === 'Cuboid'){
        if(wrong === false)
        {
            score+=1
        }
        startPlaying4()
        object[1].name = ""
    }

    else if(intersects[0].object.name == "Wrong4")
    {
        wrong = true
        scene.remove(object[6])
        object[6].name = ""
    }
    else if(intersects[0].object.name == "Wrong5")
    {
        wrong = true
        scene.remove(object[3])
        object[3].name = ""
    }
    else if(intersects[0].object.name == "Wrong6")
    {
        wrong = true
        scene.remove(object[0])
        object[0].name = ""
    }

    if(intersects[0].object.name === 'Cylinder'){
        if(wrong === false)
        {
            score+=1
        }
        startPlaying5()
        object[2].name = ""
    }

    else if(intersects[0].object.name == "Wrong1")
    {
        wrong = true
        scene.remove(object[3])
        object[3].name = ""
    }
    else if(intersects[0].object.name == "Wrong2")
    {
        wrong = true
        scene.remove(object[4])
        object[4].name = ""
    }
    else if(intersects[0].object.name == "Wrong3")
    {
        wrong = true
        scene.remove(object[5])
        object[5].name = ""
    }

    if(intersects[0].object.name === 'Prism'){
        if(wrong === false)
        {
            score+=1
        }
        startPlaying6()
        object[6].name = ""
    }
    else if(intersects[0].object.name == "Wrong4")
    {
        wrong = true
        scene.remove(object[0])
        object[0].name = ""
    }
    else if(intersects[0].object.name == "Wrong5")
    {
        wrong = true
        scene.remove(object[1])
        object[1].name = ""
    }
    else if(intersects[0].object.name == "Wrong6")
    {
        wrong = true
        scene.remove(object[5])
        object[5].name = ""
    }
    if(intersects[0].object.name === "Cube"){
        if(wrong === false)
        {
            score+=1
        }
        startPlaying7()
        object[0].name = ""
    }
    else if(intersects[0].object.name == "Wrong7")
    {
        wrong = true
        scene.remove(object[2])
        object[2].name = ""
    }
    else if(intersects[0].object.name == "Wrong9")
    {
        wrong = true
        scene.remove(object[1])
        object[1].name = ""
    }
    else if(intersects[0].object.name == "Wrong0")
    {
        wrong = true
        scene.remove(object[4])
        object[4].name = ""
    }
    if(intersects[0].object.name === 'Sphere'){
        if(wrong === false)
        {
            score+=1
        }
        endPlaying()
        object[4].name = ""
    }

    else if(intersects[0].object.name == "Wrong11")
    {
        wrong = true
        scene.remove(object[3])
        object[3].name = ""
    }
    else if(intersects[0].object.name == "Wrong22")
    {
        wrong = true
        scene.remove(object[1])
        object[1].name = ""
    }
    else if(intersects[0].object.name == "Wrong33")
    {
        wrong = true
        scene.remove(object[6])
        object[6].name = ""
    }
}

var addEventListener = () => {
    window.addEventListener('keydown', keyboardPressTitle)
    window.addEventListener('keydown', seeCube)
    window.addEventListener('keydown', seeCylinder)
    window.addEventListener('keydown', seeSphere)
    window.addEventListener('keydown', seeCuboid)
    window.addEventListener('keydown', seeCone)
    window.addEventListener('keydown', seePyramid)
    window.addEventListener('keydown', seePrism)
    window.addEventListener('keydown', startPlaying)
    window.addEventListener('pointerdown', mouseClick)
}

window.onload = () => {
    doInit()
    doRender()
    addEventListener()
}

window.onresize = () => {
    const NEW_WIDTH = innerWidth
    const NEW_HEIGHT = innerHeight

    renderer.setSize(NEW_WIDTH, NEW_HEIGHT)

    camera.aspect = NEW_WIDTH / NEW_HEIGHT
    camera.updateProjectionMatrix()
}