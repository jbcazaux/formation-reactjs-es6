context('Tps', () => {
  it('loads TP01', () => {
    cy.visit('/tp01.html')
    cy.contains('Hello world !')
  })

  it('loads TP02', () => {
    cy.visit('/tp02.html')
    cy.contains('liste de courses')
    cy.contains('pain:0.95€')
    cy.contains('gel douche:2.85€')
    cy.contains('cahier à spirales:1.2€')
    cy.get('ul li').should('have.length', 3)
  })

  it('loads TP03', () => {
    cy.visit('/tp03.html')

    cy.get('table thead').should('exist')
    cy.get('table tbody tr').should('have.length', 4)
    cy.contains('Aucun étudiant sélectionné !')
    cy.should('not.contain', 'ethan yellow')

    cy.get('table tbody tr').eq(2).click()
    cy.contains('ethan yellow')

    cy.get('input').type('mary')
    cy.get('table tbody tr').should('have.length', 1)
  })

  it('loads TP04', () => {
    cy.visit('/tp04.html')
    cy.contains('liste de courses')
    cy.contains('pain:0.95€')
    cy.contains('gel douche:2.85€')
    cy.contains('cahier à spirales:1.2€')
    cy.get('ul li').should('have.length', 3)

    cy.get('input').eq(0).type('foo')
    cy.get('input').eq(1).type('42')
    cy.get('button').click()
    cy.contains('foo:42€')
    cy.get('ul li').should('have.length', 4)
  })

  it('loads TP05', () => {
    cy.visit('/tp05.html')
    cy.contains('liste de courses')
    cy.contains('pain:0.95€')
    cy.contains('gel douche:2.85€')
    cy.contains('cahier à spirales:1.2€')
    cy.get('ul li').should('have.length', 3)

    cy.get('input').eq(0).type('foo')
    cy.get('input').eq(1).type('100')
    cy.get('button').click()
    cy.contains('foo:100€')
    cy.get('ul li').should('have.length', 4)
  })

  it('loads TP06', () => {
    cy.visit('/tp06.html')
    cy.contains('Small, user = 1-admin')
  })

  it('loads TP07', () => {
    cy.visit('/tp07.html')

    cy.get('table thead').should('exist')
    cy.get('tr[data-testid=student-row]').should('have.length', 4)
    cy.contains('Aucun étudiant sélectionné !')
    cy.should('not.contain', 'ethan yellow')

    cy.get('table tbody tr').eq(2).click()
    cy.contains('ethan yellow')

    cy.get('input').type('mary')
    cy.get('tr[data-testid=student-row]').should('have.length', 1)
  })

  it('loads TP08', () => {
    cy.visit('/tp08.html')

    cy.contains('Home').click()
    cy.url().should('eq', 'http://localhost:8080/')
    cy.contains('Welcome !')

    cy.contains('About').click()
    cy.url().should('eq', 'http://localhost:8080/about')
    cy.contains('About this application...')

    cy.contains('Users').click()
    cy.url().should('eq', 'http://localhost:8080/users')
    cy.contains('Please select a user.')
    cy.contains('Anna').click()
    cy.url().should('eq', 'http://localhost:8080/users/anna')
    cy.contains('Details of anna')
    cy.get('img[src="/anna.jpeg"]').should('exist')
    cy.contains('Elsa').click()
    cy.url().should('eq', 'http://localhost:8080/users/elsa')
    cy.contains('Details of elsa')
    cy.get('img[src="/elsa.jpeg"]').should('exist')
  })

  it('loads TP09', () => {
    cy.visit('/tp09.html')

    cy.get('button').click()
    cy.contains(/^Sel : \d{1,3}/g)
    cy.contains('div', '6')
  })
})
